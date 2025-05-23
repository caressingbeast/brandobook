import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { Post } from '@/types';
import Link from 'next/link';

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <>
      {posts.map((post) => (
        <Card
          key={post.id}
          className='rounded-2xl overflow-hidden border-[#f0e8e0] dark:border-[#2a2722]'
        >
          <CardHeader className='p-3 lg:p-4'>
            <div className='flex items-center gap-3'>
              <Avatar className='h-10 w-10 lg:h-12 lg:w-12'>
                <AvatarImage
                  src={post.author.avatar || '/placeholder.svg'}
                  alt={post.author.name}
                />
                <AvatarFallback>
                  {post.author.firstName.substring(0, 1)}
                  {post.author.lastName.substring(0, 1)}
                </AvatarFallback>
              </Avatar>
              <div className='flex-1 min-w-0'>
                <Link
                  href={`/profile/${post.author.username}`}
                  className='font-medium hover:underline text-gray-900 dark:text-gray-100 block truncate'
                >
                  {post.author.firstName} {post.author.lastName}
                </Link>
                <p className='text-sm text-gray-500 dark:text-gray-400'>
                  {new Date(post.timestamp).toLocaleString()}
                </p>
              </div>
            </div>
          </CardHeader>
          <Link href={`/post/${post.id}`}>
            <CardContent className='p-3 lg:p-4 pt-0'>
              <p className='mb-3 text-gray-800 dark:text-gray-200 text-sm lg:text-base leading-relaxed'>
                {post.content.length > 200
                  ? `${post.content.substring(0, 200)}...`
                  : post.content}
              </p>
              {post.image && (
                <div className='rounded-xl overflow-hidden'>
                  <img
                    src={post.image || '/placeholder.svg'}
                    alt='Post content'
                    className='w-full h-auto'
                  />
                </div>
              )}
            </CardContent>
          </Link>
        </Card>
      ))}
    </>
  );
}
