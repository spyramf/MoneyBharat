
export interface User {
  id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: 'admin' | 'user';
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content: string;
  featuredImage?: string;
  publishedDate?: string;
  status: 'draft' | 'published';
  author: {
    id: string;
    name: string;
    avatar?: string;
  };
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
  seo?: {
    metaTitle?: string;
    metaDescription?: string;
    keywords?: string[];
    canonicalUrl?: string;
  };
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  message: string;
  service?: string;
}

export interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  message?: string;
}
