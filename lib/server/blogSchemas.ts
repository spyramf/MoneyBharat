import { z } from 'zod'

export const blogPayloadSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  slug: z.string().min(1, 'Slug is required'),
  excerpt: z.string().min(1, 'Excerpt is required'),
  content: z.string().min(1, 'Content is required'),
  category_id: z.string().min(1, 'Category is required'),
  featured_image: z
    .string()
    .trim()
    .min(1)
    .optional()
    .or(z.literal(''))
    .or(z.null()),
  is_featured: z.boolean().optional().default(false),
  status: z.enum(['draft', 'published', 'archived']),
  meta_title: z.string().optional().or(z.literal('')).or(z.null()),
  meta_description: z.string().optional().or(z.literal('')).or(z.null()),
  tags: z.array(z.string()).optional().default([]),
  read_time: z.number().min(1, 'Read time must be at least 1 minute'),
  author_id: z.string().optional(),
  published_at: z.string().optional().or(z.null()),
})

export type BlogPayload = z.infer<typeof blogPayloadSchema>
