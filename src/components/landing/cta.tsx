import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Play } from 'lucide-react';

export default function CallToAction() {
  return (
    <section id="download" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Ready to Dive In?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Download DramaWatch today and start your journey into a universe of endless entertainment.
        </p>
        <Button size="lg" asChild className="group h-16 px-6 bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105">
          <Link href="#" className="inline-flex items-center">
            <Play className="h-8 w-8 mr-3 transition-colors group-hover:text-accent" />
            <div className="text-left">
              <p className="text-xs">GET IT ON</p>
              <p className="text-xl font-semibold -mt-1">Google Play</p>
            </div>
          </Link>
        </Button>
      </div>
    </section>
  );
}
