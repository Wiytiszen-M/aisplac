'use client';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import ProductCard from '../product-card/product-card';

function SingleCarrousel() {
  return (
    <Carousel className="w-full max-w-[370px]">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <ProductCard
                name="BARBIERI"
                description="Montante 89 Rigidiza x9 52 (1.90x12.5cm)"
                sku="000000"
                imageUrl="/fake-pvc-img.png"
                onAddToCart={() => null}
                className="h-[498px] w-[365px]"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default SingleCarrousel;
