import { PostList } from '@/components/PostList';
import { getPosts } from '@/lib/api';
import { Suspense } from 'react';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-book-50">
      <div className="p-4 p-6 max-w-2xl mx-auto">
        <div className="space-y-4 space-y-6">
          <Suspense fallback={<div />}>
            <Feed />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

async function Feed() {
  const posts = await getPosts();

  if (posts.length === 0) {
    return (
      <div className="text-center p-6 lg:p-8 bg-white dark:bg-slate-800 rounded-xl border dark:border-slate-700">
        <p className="text-gray-500 dark:text-gray-400">
          No posts to display. Start sharing your reading journey!
        </p>
      </div>
    );
  }

  return <PostList posts={posts} />;
}
