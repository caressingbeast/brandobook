import { Avatar } from '@/components/Avatar';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { getPostById } from '@/lib/api';
import { formatDate } from '@/lib/utils';
import { Heart } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export default async function PostPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const postId = Number.parseInt(id);
  const post = await getPostById(postId);

  if (!post) {
    return notFound();
  }

  return (
    <main className="p-4 p-6 max-w-3xl mx-auto">
      <Card className="rounded-2xl overflow-hidden border-[#f0e8e0] dark:border-[#2a2722]">
        <CardHeader className="p-3 lg:p-4">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 lg:h-12 lg:w-12" user={post.author} />
            <div className="flex-1 min-w-0">
              <Link
                href={`/profile/${post.author.username}`}
                className="font-medium hover:underline text-gray-900 dark:text-gray-100 block truncate"
              >
                {post.author.firstName} {post.author.lastName}
              </Link>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                <span title={post.createdAt}>{formatDate(post.createdAt)}</span>
              </p>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-3 lg:p-4 pt-0">
          <div className="mb-3 text-gray-800 dark:text-gray-200 whitespace-pre-line text-sm lg:text-base leading-relaxed">
            {post.content}
          </div>
          {post.image && (
            <div className="rounded-xl overflow-hidden">
              <img
                src={post.image || '/placeholder.svg'}
                alt="Post content"
                className="w-full h-auto"
              />
            </div>
          )}
        </CardContent>
        <CardFooter className="p-3 lg:p-4 border-t border-[#f0e8e0] dark:border-[#2a2722] flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-1">
              <div className="bg-rose-500 text-white rounded-full p-1">
                <Heart className="h-3 w-3" />
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {post.likes}
              </span>
            </div>
            <div className="text-sm text-gray-500 dark:text-gray-400">
              {post.comments.length} comments
            </div>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
}
