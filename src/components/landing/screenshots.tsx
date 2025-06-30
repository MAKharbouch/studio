import Image from 'next/image';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const screenshots = [
  { src: "https://placehold.co/300x600.png", alt: "App homescreen", hint: "app homescreen" },
  { src: "https://placehold.co/300x600.png", alt: "Movie details page", hint: "movie details" },
  { src: "https://placehold.co/300x600.png", alt: "User profile screen", hint: "user profile" },
  { src: "https://placehold.co/300x600.png", alt: "Search results view", hint: "search results" },
  { src: "https://placehold.co/300x600.png", alt: "Video player interface", hint: "video player" },
];

export default function Screenshots() {
  return (
    <section id="screenshots" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-headline">A Glimpse Inside DramaWatch</h2>
          <p className="text-lg text-muted-foreground mt-4 max-w-3xl mx-auto">
            Explore our intuitive and beautiful user interface designed for an immersive cinematic experience.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {screenshots.map((screenshot, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="overflow-hidden border-2 border-border/60">
                    <CardContent className="flex aspect-[9/19] items-center justify-center p-0">
                      <Image
                        src={screenshot.src}
                        alt={screenshot.alt}
                        width={300}
                        height={600}
                        className="w-full h-full object-cover"
                        data-ai-hint={screenshot.hint}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
