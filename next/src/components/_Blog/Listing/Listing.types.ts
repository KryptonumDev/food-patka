import type { BlogPostCardTypes } from '@/components/global/BlogPostCard';

export type ListingTypes = {
  heading: string;
  paragraph: string;
  currentPage?: number;
  currentCategorySlug?: string;
}

export type ListingQueryTypes = {
  categories: {
    name: string;
    slug: string;
    postCount: number;
  }[];
  totalPosts: number;
  posts: BlogPostCardTypes[];
};

export type PostsTypes = {
  posts: ListingQueryTypes['posts'];
}