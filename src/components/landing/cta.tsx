import { Button } from '@/components/ui/button';
import Link from 'next/link';

const GooglePlayIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 512" fill="currentColor" {...props}>
      <path d="M31.25,13.56,178,160.31,31.25,307.06Z" style={{fill:'#00c0f3'}}/>
      <path d="M480.75,256,357,379.75,210.25,233,357,82.25Z" style={{fill:'#ffdd00'}}/>
      <path d="M178,160.31,210.25,233,31.25,307.06Z" style={{fill:'#ff3d00'}}/>
      <path d="m31.25,13.56,146.75,146.75,302.75,95.69,0-194.44Z" style={{fill:'#00e57a'}}/>
      <path d="M480.75,256,357,132.25,210.25,283,357,429.75Z" style={{fill:"#00a359"}}/>
    </svg>
);


export default function CallToAction() {
  return (
    <section id="download" className="py-20 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 font-headline">Ready to Dive In?</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Download StreamVerse today and start your journey into a universe of endless entertainment.
        </p>
        <Button size="lg" asChild className="h-16 px-6 bg-foreground text-background hover:bg-foreground/90 transition-transform hover:scale-105">
          <Link href="#" className="inline-flex items-center">
            <GooglePlayIcon className="h-8 w-8 mr-3" />
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
