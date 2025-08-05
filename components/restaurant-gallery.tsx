"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

// Gallery images data
const galleryImages = [
  {
    src: "/restaurant/rest-10.jpg",
    alt: "Eleganckie wnętrze restauracji",
  },
  {
    src: "/restaurant/rest-03.jpg",
    alt: "Bar restauracyjny",
  },
  {
    src: "/restaurant/rest-09.jpg",
    alt: "Prywatna sala restauracyjna",
  },
  {
    src: "/restaurant/rest-07.jpg",
    alt: "Tradycyjne polskie dania",
  },
  {
    src: "/restaurant/rest-01.jpg",
    alt: "Restauracja Dzika Róża",
  },
  {
    src: "/restaurant/rest-05.jpg",
    alt: "Wykwintne potrawy",
  },
  {
    src: "/restaurant/rest-02.jpg",
    alt: "Elegancka atmosfera",
  },
  {
    src: "/restaurant/rest-04.jpg",
    alt: "Profesjonalna obsługa",
  },
];

export default function RestaurantGallery() {
  const plugin = useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false, stopOnMouseEnter: false })
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3 }}
      className="mb-16 -mx-4 sm:-mx-6 lg:-mx-8 xl:-mx-12"
    >
      <div className="px-4 sm:px-6 lg:px-8 xl:px-12 mb-8">
        <div className="flex items-center justify-center gap-3">
          <div className="h-px flex-1 bg-avangarda"></div>
          <h2 className="text-2xl font-semibold text-center text-primary">
            Zapraszamy
          </h2>
          <div className="h-px flex-1 bg-avangarda"></div>
        </div>
      </div>

      {/* Full-width Carousel */}
      <Carousel
        plugins={[plugin.current]}
        className="w-full"
        opts={{
          align: "start",
          loop: true,
        }}
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {galleryImages.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-1/2 md:basis-1/3"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  quality={90}
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </motion.div>
  );
}
