export type User = {
  id: number;
  firstName: string;
  lastName: string;
  username: string;
  avatar: string;
};

export type Comment = {
  id: number;
  author: User;
  content: string;
  timestamp: string;
  likes: number;
};

export type Post = {
  id: number;
  author: User;
  content: string;
  image?: string;
  timestamp: string;
  likes: number;
  comments: Comment[];
};
