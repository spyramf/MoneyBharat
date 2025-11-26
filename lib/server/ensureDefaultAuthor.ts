import type { SupabaseClient } from '@supabase/supabase-js'
import type { Database } from '@/integrations/supabase/types'
import type { SupabaseBlogAuthor } from '@/services/supabaseBlogService'
import { getSupabaseAdminClient } from './supabaseAdmin'

const DEFAULT_AUTHOR_NAME = 'Money Bharat Team'

export async function ensureDefaultAuthor(
  client?: SupabaseClient<Database>
): Promise<SupabaseBlogAuthor | null> {
  try {
    const supabase = client ?? getSupabaseAdminClient()

    const { data, error } = await supabase
      .from('blog_authors')
      .select('*')
      .eq('name', DEFAULT_AUTHOR_NAME)
      .maybeSingle()

    if (error) {
      console.error('ensureDefaultAuthor lookup failed:', error)
      return null
    }

    if (data) {
      return data as SupabaseBlogAuthor
    }

    const { data: created, error: insertError } = await supabase
      .from('blog_authors')
      .insert({
        name: DEFAULT_AUTHOR_NAME,
        role: 'Editorial Team',
        bio: 'Official Money Bharat Finance editorial team.',
      })
      .select('*')
      .single()

    if (insertError) {
      console.error('ensureDefaultAuthor insert failed:', insertError)
      return null
    }

    return created as SupabaseBlogAuthor
  } catch (err) {
    console.error('ensureDefaultAuthor unexpected error:', err)
    return null
  }
}
