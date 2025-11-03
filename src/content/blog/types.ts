
export interface BlogAuthor {
  id: number;
  name: string;
  role: string;
  avatar: string;
  bio?: string;
}

export interface BlogCategory {
  name: string;
  slug: string;
  description?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: BlogAuthor;
  category: string;
  tags: string[];
  featuredImage: string;
  publishedDate: string;
  readTime: string;
  isFeatured: boolean;
  meta_title?: string;
  meta_description?: string;
  focus_keywords?: string[];
}
