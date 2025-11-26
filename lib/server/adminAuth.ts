import type { NextApiRequest, NextApiResponse } from 'next'
import { createPagesServerClient } from '@supabase/auth-helpers-nextjs'
import type { Database } from '@/integrations/supabase/types'

export interface AdminSessionResult {
  error?: string
  status?: number
  userId?: string
}

export async function requireAdminSession(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<AdminSessionResult> {
  const supabase = createPagesServerClient<Database>({ req, res })

  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession()

  if (sessionError || !session) {
    return { error: 'Unauthorized', status: 401 }
  }

  const { data: userRole, error: roleError } = await supabase
    .from('user_roles')
    .select('role')
    .eq('user_id', session.user.id)
    .single()

  if (roleError) {
    console.error('Failed to verify user role', roleError)
    return { error: 'Unable to verify permissions', status: 500 }
  }

  type UserRoleRow = Pick<
    Database['public']['Tables']['user_roles']['Row'],
    'role'
  >

  const roleValue = (userRole as UserRoleRow | null)?.role

  if (roleValue !== 'admin') {
    return { error: 'Forbidden', status: 403 }
  }

  return { userId: session.user.id }
}
