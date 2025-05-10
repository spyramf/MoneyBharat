
export interface TableOfContentsItem {
  id: string;
  text: string;
  level: number;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  date: string;
  author: string;
  authorAvatar?: string;
  authorBio?: string;
  categories: string[];
  tags: string[];
  readingTime: number;
  featured: boolean;
  tableOfContents: TableOfContentsItem[];
  popularity?: number;
}
