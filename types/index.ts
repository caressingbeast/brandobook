export type User = {
  id: number;
  avatar: string;
  bio: string;
  firstName: string;
  friends: number;
  interests: string[];
  isCurrentUser: boolean;
  lastName: string;
  location: string;
  username: string;
  website: string;
  createdAt: string;
};

export type Comment = {
  id: number;
  author: User;
  content: string;
  createdAt: string;
  likes: number;
};

export type Post = {
  id: number;
  author: User;
  content: string;
  image?: string;
  createdAt: string;
  likes: number;
  comments: Comment[];
};
