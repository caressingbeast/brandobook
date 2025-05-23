import { posts, users } from '@/data/posts';
import type { Post, User } from '@/types';

// Get all posts
export async function getPosts(): Promise<Post[]> {
  return [...posts];
}

// Get user by username
export async function getUserByUsername(
  username: string
): Promise<User | null> {
  const user = users.find((user) => user.username === username);
  return user || null;
}

// Get user profile by username
export async function getUserProfile(username: string): Promise<User | null> {
  const user = await getUserByUsername(username);

  if (!user) {
    return null;
  }

  return user;
}

// Get user posts by username
export async function getUserPosts(username: string): Promise<Post[]> {
  const user = await getUserByUsername(username);

  if (!user) {
    return [];
  }

  // In a real app, this would query a database
  // For now, we'll return posts by this user
  return posts.filter((post) => post.author.username === username);
}
