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
  const { id } = req.query

  if (typeof id !== 'string') {
    return res.status(400).json({ error: 'Invalid blog id' })
  }

  const authResult = await requireAdminSession(req, res)
  if (authResult.error) {
    return res
      .status(authResult.status ?? 500)
      .json({ error: authResult.error })
  }

  const supabase = getSupabaseAdminClient()

  if (req.method === 'PUT') {
    const parsed = blogPayloadSchema.safeParse(req.body)
    if (!parsed.success) {
      const message = parsed.error.issues?.[0]?.message ?? 'Invalid payload'
      return res.status(400).json({ error: message })
    }

    try {
      const { data, error } = await supabase
        .from('blogs')
        .update(normalizePayload(parsed.data))
        .eq('id', id)
        .select(
          `
          *,
          category:blog_categories(*),
          author:blog_authors(*)
        `
        )
        .single()

      if (error) {
        console.error('Failed to update blog post:', error)
        return res.status(500).json({ error: error.message })
      }

      return res.status(200).json({ data })
    } catch (error) {
      console.error('Unexpected error updating blog post:', error)
      return res.status(500).json({ error: 'Failed to update blog post' })
    }
  }

  if (req.method === 'DELETE') {
    try {
      const { error } = await supabase.from('blogs').delete().eq('id', id)
      if (error) {
        console.error('Failed to delete blog post:', error)
        return res.status(500).json({ error: error.message })
      }

      return res.status(204).end()
    } catch (error) {
      console.error('Unexpected error deleting blog post:', error)
      return res.status(500).json({ error: 'Failed to delete blog post' })
    }
  }

  res.setHeader('Allow', 'PUT,DELETE')
  return res.status(405).json({ error: 'Method not allowed' })
}
