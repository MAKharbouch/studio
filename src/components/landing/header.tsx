import { PlayCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <Link href="/" className="mr-4 flex items-center">
          <PlayCircle className="h-6 w-6 mr-2 text-primary" />
          <span className="font-bold">DramaWatch</span>
        </Link>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button asChild>
            <Link href="#download">
              <Download className="mr-2 h-4 w-4" />
              Download
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
