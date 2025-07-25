import React, { useEffect, useState } from "react";
import MultiCarousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import type { IMovie } from "../../types";
import type { CaroselProps } from "./types";


const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 768, min: 0 },
    items: 2,
  },
};

const Carousel: React.FC<CaroselProps> = ({ movies , onSelectMovie }) => {
    const [movieImages, setMovieImages] = useState<{ movie: IMovie; path: string }[]>([]);

    useEffect(() => {
      const loadImagePaths = async () => {
        const data = await Promise.all(
          movies.map(async (movie) => {
            const module = await import(`../../assets/${movie.CoverImage}`);
            return { movie, path: module.default };
          })
        );
        setMovieImages(data);
      };
  
      loadImagePaths();
    }, [movies]);
      
  return (
    <MultiCarousel
      responsive={responsive}
      draggable
      swipeable
      infinite={false}
      keyBoardControl
      arrows={false}
      showDots={false}
      customTransition="all .5"
      transitionDuration={500}
      className="py-2"
    >
      {movieImages.map(({ movie, path }) => (
        <div
          key={movie.Id}
          className="px-1 flex items-center cursor-pointer"
          onClick={() => onSelectMovie(movie)}
        >
          <img
            src={path}
            alt={movie.Title}
            className="w-full h-[220px] object-cover rounded-md"
          />
        </div>
      ))}


    </MultiCarousel>
  );
};

export default Carousel;
