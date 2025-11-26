import type { NextApiRequest, NextApiResponse } from 'next'
import { blogPayloadSchema, type BlogPayload } from '@/lib/server/blogSchemas'
import { requireAdminSession } from '@/lib/server/adminAuth'
import { getSupabaseAdminClient } from '@/lib/server/supabaseAdmin'

function normalizePayload(payload: BlogPayload) {
  const normalizeString = (value?: string | null) => {
    if (!value) return null
    const trimmed = value.trim()
    return trimmed.length ? trimmed : null
  }

  return {
    ...payload,
    featured_image: normalizeString(payload.featured_image ?? null),
    meta_title: normalizeString(payload.meta_title ?? null),
    meta_description: normalizeString(payload.meta_description ?? null),
    tags: payload.tags?.filter(Boolean) ?? [],
    published_at:
      payload.status === 'published'
        ? payload.published_at ?? new Date().toISOString()
        : null,
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const authResult = await requireAdminSession(req, res)
  if (authResult.error) {
    return res
      .status(authResult.status ?? 500)
      .json({ error: authResult.error })
  }

  const parsed = blogPayloadSchema.safeParse(req.body)
  if (!parsed.success) {
    const message = parsed.error.errors[0]?.message ?? 'Invalid payload'
    return res.status(400).json({ error: message })
  }

  try {
    const supabase = getSupabaseAdminClient()
    const payload = normalizePayload(parsed.data)

    const { data, error } = await supabase
      .from('blogs')
      .insert(payload)
      .select(
        `
        *,
        category:blog_categories(*),
        author:blog_authors(*)
      `
      )
      .single()

    if (error) {
      console.error('Failed to create blog post:', error)
      return res.status(500).json({ error: error.message })
    }

    return res.status(200).json({ data })
  } catch (error) {
    console.error('Unexpected error creating blog post:', error)
    return res.status(500).json({ error: 'Failed to create blog post' })
  }
}
