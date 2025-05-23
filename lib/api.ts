import { posts } from '@/data/posts';
import type { Post } from '@/types';

// Get all posts
export async function getPosts(): Promise<Post[]> {
  return [...posts];
}
