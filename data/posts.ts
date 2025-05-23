import type { Comment, Post, User } from '@/types';

// Helper function to create timestamps in the past
function getPastDate(daysAgo: number, hoursAgo = 0, minutesAgo = 0): string {
  const date = new Date();
  date.setDate(date.getDate() - daysAgo);
  date.setHours(date.getHours() - hoursAgo);
  date.setMinutes(date.getMinutes() - minutesAgo);
  return date.toISOString();
}

// Auto-incrementing ID counters
let nextCommentId = 1;
let nextPostId = 1;
let nextUserId = 1;

// Mock users
export const users: User[] = [
  {
    id: nextUserId++,
    firstName: 'Emma',
    lastName: 'Bookworm',
    username: 'emmareads',
    avatar: '/placeholder.svg?height=40&width=40&text=EB',
  },
  {
    id: nextUserId++,
    firstName: 'James',
    lastName: 'Literary',
    username: 'jamesliterary',
    avatar: '/placeholder.svg?height=40&width=40&text=JL',
  },
  {
    id: nextUserId++,
    firstName: 'Sarah',
    lastName: 'Novelist',
    username: 'sarahnovelist',
    avatar: '/placeholder.svg?height=40&width=40&text=SN',
  },
  {
    id: nextUserId++,
    firstName: 'Alex',
    lastName: 'Bibliophile',
    username: 'alexbiblio',
    avatar: '/placeholder.svg?height=40&width=40&text=AB',
  },
];

// Mock comments
const comments: Comment[] = [
  {
    id: nextCommentId++,
    author: users[0],
    content:
      'I absolutely loved this book! The character development was incredible. Have you read any other works by this author?',
    createdAt: getPastDate(0, 1, 0), // 1 hour ago
    likes: 8,
  },
  {
    id: nextCommentId++,
    author: users[3],
    content:
      'Adding this to my TBR pile immediately! Your review convinced me. 📚',
    createdAt: getPastDate(0, 0, 45), // 45 minutes ago
    likes: 5,
  },
  {
    id: nextCommentId++,
    author: users[2],
    content:
      "I'm so jealous of your cozy reading nook! The lighting looks perfect for those long reading sessions.",
    createdAt: getPastDate(0, 3, 0), // 3 hours ago
    likes: 12,
  },
  {
    id: nextCommentId++,
    author: users[0],
    content:
      'That bookstore is one of my favorites! Did you find anything good in their rare books section?',
    createdAt: getPastDate(0, 2, 0), // 2 hours ago
    likes: 3,
  },
  {
    id: nextCommentId++,
    author: users[1],
    content:
      'Congratulations on finishing your reading challenge! What was your favorite book from the list?',
    createdAt: getPastDate(0, 6, 0), // 6 hours ago
    likes: 15,
  },
];

// Mock posts
export const posts: Post[] = [
  {
    id: nextPostId++,
    author: users[1],
    content:
      "Just finished reading 'The Seven Husbands of Evelyn Hugo' and I'm absolutely speechless! 📖✨\n\nThis book had everything - glamour, secrets, love, and the most incredible character development I've read in years. Taylor Jenkins Reid has such a gift for storytelling. The way she weaves together past and present is masterful.\n\nWithout spoiling anything, I'll just say that the ending left me in tears (happy tears!). If you're looking for your next read, I cannot recommend this enough.\n\n⭐⭐⭐⭐⭐ 5/5 stars\n\n#BookReview #TaylorJenkinsReid #ContemporaryFiction #MustRead",
    image: '/placeholder.svg?height=400&width=600&text=Book+Cover',
    createdAt: getPastDate(0, 2, 0), // 2 hours ago
    likes: 42,
    comments: [comments[0], comments[1]],
  },
  {
    id: nextPostId++,
    author: users[2],
    content:
      "Finally set up my dream reading nook! 🏠📚\n\nAfter months of planning, I've created the perfect cozy corner for my reading adventures. The natural light from the window is perfect for afternoon reading sessions, and the built-in bookshelves hold all my current favorites.\n\nThere's something magical about having a dedicated space just for books. Already planning my next reading session here with a cup of tea and the new mystery novel I picked up yesterday.\n\nWhat does your reading space look like? I'd love to see your setups!\n\n#ReadingNook #BookLovers #CozyReading #HomeLibrary",
    image: '/placeholder.svg?height=400&width=600&text=Reading+Nook',
    createdAt: getPastDate(0, 5, 0), // 5 hours ago
    likes: 87,
    comments: [comments[2], comments[3]],
  },
  {
    id: nextPostId++,
    author: users[3],
    content:
      "Completed my 2024 reading challenge! 🎉📚\n\nGoal: 52 books ✅\nActual: 58 books!\n\nThis year I explored so many new genres and discovered some incredible authors. From sci-fi epics to cozy mysteries, historical fiction to poetry collections - each book taught me something new.\n\nSome standout reads:\n📖 'Klara and the Sun' by Kazuo Ishiguro\n📖 'The Midnight Library' by Matt Haig\n📖 'Circe' by Madeline Miller\n📖 'Educated' by Tara Westover\n\nAlready planning next year's reading goals. Thinking of focusing more on diverse voices and maybe tackling some classics I've been putting off.\n\n#ReadingChallenge2024 #BookGoals #ReadingLife #Bookstagram",
    createdAt: getPastDate(0, 8, 0), // 8 hours ago
    likes: 124,
    comments: [comments[4]],
  },
];

// Export the next ID functions for creating new data
export function getNextUserId(): number {
  return nextUserId++;
}

export function getNextPostId(): number {
  return nextPostId++;
}

export function getNextCommentId(): number {
  return nextCommentId++;
}
