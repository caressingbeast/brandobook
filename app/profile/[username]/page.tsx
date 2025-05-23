import { Metadata } from 'next';
import { getUserPosts, getUserProfile } from '@/lib/api';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Edit, Link2, MapPin } from 'lucide-react';
import { Avatar } from '@/components/Avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PostList } from '@/components/PostList';
import Link from 'next/link';
import {
  Avatar as ShadAvatar,
  AvatarFallback,
  AvatarImage,
} from '@/components/ui/avatar';

// Generate metadata for the page
export async function generateMetadata({
  params,
}: {
  params: { username: string };
}): Promise<Metadata> {
  const { username } = await params;
  const user = await getUserProfile(username);

  if (!user) {
    return {
      title: 'User Not Found',
    };
  }

  return {
    title: `${user.firstName} ${user.lastName} (@${user.username}) | Brandobook`,
    description: user.bio,
  };
}

export default async function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  const { username } = await params;
  const user = await getUserProfile(username);

  if (!user) {
    return <div>Not Found</div>;
  }

  return (
    <div className="mt-20 text-center px-4">
      <div className="mb-4 flex justify-center">
        <Avatar
          className="w-32 h-32 border-4 border-white dark:border-[#211e1b] rounded-full"
          user={user}
        />
      </div>
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
        {user.firstName} {user.lastName}
      </h1>
      <p className="text-gray-500 dark:text-gray-400 mt-1">@{user.username}</p>
      <div className="flex items-center justify-center gap-4 mt-4">
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <MapPin size={16} className="text-gray-500" />
          <span>{user.location}</span>
        </div>
        {user.website && (
          <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
            <Link2 size={16} className="text-gray-500" />
            <a
              href={`https://${user.website}`}
              className="hover:underline text-orange-600 dark:text-orange-400"
            >
              {user.website}
            </a>
          </div>
        )}
        <div className="flex items-center gap-1 text-gray-600 dark:text-gray-300">
          <Calendar size={16} className="text-gray-500" />
          <span>
            Joined{' '}
            {new Date(user.createdAt).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
            })}
          </span>
        </div>
      </div>
      <p className="mt-4 max-w-lg mx-auto text-gray-700 dark:text-gray-300">
        {user.bio}
      </p>
      <div className="flex flex-wrap gap-2 justify-center mt-4">
        {user.interests.map((interest, index) => (
          <Badge
            key={index}
            variant="outline"
            className="bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/30 rounded-full px-3 py-1"
          >
            {interest}
          </Badge>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {user.isCurrentUser ? (
          <Button className="rounded-full bg-orange-600 hover:bg-orange-700">
            <Edit size={18} className="mr-2" />
            Edit Profile
          </Button>
        ) : (
          <>
            <Button className="rounded-full bg-orange-600 hover:bg-orange-700">
              Add Friend
            </Button>
            <Button variant="outline" className="rounded-full">
              Message
            </Button>
          </>
        )}
      </div>
      <div className="flex items-center justify-center gap-8 mt-8 border-b border-[#f0e8e0] dark:border-[#2a2722] pb-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {user.friends}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Friends</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            42
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">Posts</p>
        </div>
      </div>
      <div className="p-6">
        <Tabs defaultValue="posts" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 rounded-xl bg-orange-50 dark:bg-gray-800/50 p-1">
            <TabsTrigger
              value="posts"
              className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
            >
              Posts
            </TabsTrigger>
            <TabsTrigger
              value="friends"
              className="rounded-lg data-[state=active]:bg-white dark:data-[state=active]:bg-gray-800"
            >
              Friends
            </TabsTrigger>
          </TabsList>

          <TabsContent value="posts" className="mt-6">
            <div className="space-y-6">
              <ProfilePosts username={user.username} />
            </div>
          </TabsContent>
          <TabsContent value="friends" className="mt-6">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {Array.from({ length: 8 }).map((_, i) => (
                <Link
                  key={i}
                  href={`/profile/friend${i + 1}`}
                  className="block"
                >
                  <div className="bg-white dark:bg-[#211e1b] rounded-xl p-4 text-center border border-[#f0e8e0] dark:border-[#2a2722]">
                    <ShadAvatar className="h-20 w-20 mx-auto mb-3">
                      <AvatarImage
                        src={`/placeholder.svg?height=80&width=80&text=F${i + 1}`}
                        alt={`Friend ${i + 1}`}
                      />
                      <AvatarFallback>{`F${i + 1}`}</AvatarFallback>
                    </ShadAvatar>
                    <h3 className="font-medium text-gray-900 dark:text-gray-100">
                      Friend {i + 1}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                      {Math.floor(Math.random() * 10) + 1} mutual friends
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full rounded-xl"
                    >
                      View Profile
                    </Button>
                  </div>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Server component for profile posts
async function ProfilePosts({ username }: { username: string }) {
  const posts = await getUserPosts(username);

  return <PostList posts={posts} />;
}
