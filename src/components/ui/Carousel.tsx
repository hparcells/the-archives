'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import CarouselButton from './CarouselButton';

interface CarouselProps {
  images: string[];
}

function Carousel({ images }: CarouselProps) {
  const [current, setCurrent] = useState(0);

  function prev() {
    setCurrent((i) => (i - 1 + images.length) % images.length);
  }

  function next() {
    setCurrent((i) => (i + 1) % images.length);
  }

  return (
    <div className='relative h-48 sm:h-72 w-full overflow-hidden rounded-sm border border-stone-800 bg-stone-900'>
      {images.map((src, i) => (
        <Image
          src={`/images/projects/${src}`}
          alt={`Screenshot #${i + 1}`}
          fill
          sizes='(max-width: 672px) 100vw, 620px'
          className={`object-cover transition-opacity duration-200 ${i === current ? 'opacity-100' : 'opacity-0'}`}
          key={src}
        />
      ))}
      {images.length > 1 && (
        <>
          <CarouselButton
            icon={ChevronLeft}
            onClick={prev}
            className='bg-mist-950/75 absolute left-2 top-1/2 -translate-y-1/2 z-1'
          />
          <CarouselButton
            icon={ChevronRight}
            onClick={next}
            className='bg-mist-950/75 absolute right-2 top-1/2 -translate-y-1/2 z-1'
          />
          <div className='absolute bottom-3 left-1/2 z-1 flex -translate-x-1/2 items-center gap-1.5 bg-mist-950/75 p-1 rounded-xl'>
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCurrent(i);
                }}
                className={`h-1.5 w-1.5 cursor-pointer rounded-full transition-colors duration-200 ${
                  i === current ? 'bg-yellow-500' : 'bg-stone-600 hover:bg-stone-400'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Carousel;
