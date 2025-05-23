import { BookOpen } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-book-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="w-20 h-20 bg-gradient-to-br from-book-600 to-leather-600 rounded-full flex items-center justify-center mb-6">
        <BookOpen className="text-white" size={32} />
      </div>

      <h1 className="text-4xl font-bold text-book-800 dark:text-book-200 mb-2">
        404
      </h1>
      <h2 className="text-2xl font-semibold text-book-700 dark:text-book-300 mb-4">
        Page Not Found
      </h2>
      <p className="text-book-600 dark:text-book-400 mb-8 text-center max-w-md">
        Looks like this page got lost in the library. Let's get you back to your
        reading community.
      </p>

      <Link href="/">
        <Button className="bg-book-600 hover:bg-book-700 text-white">
          Return to Brandobook
        </Button>
      </Link>
    </div>
  );
}
