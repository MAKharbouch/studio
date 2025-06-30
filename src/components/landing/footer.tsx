import { PlayCircle } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <PlayCircle className="h-6 w-6 mr-2 text-primary" />
            <span className="font-bold">StreamVerse</span>
          </div>
          <div className="text-center md:text-right text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} StreamVerse. All Rights Reserved.</p>
            <div className="mt-2">
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
              <span className="mx-2">|</span>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
