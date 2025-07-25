import type { IMovie } from "../../types";
import { formatDuration } from '../../utils/formatDuration';

interface Props {
  movie: IMovie;
}

export default function Info({ movie }: Props) {

 const formattedDuration = formatDuration(movie.Duration);

  return (
    <>
     <div className=" absolute z-10 p-8 top-[10%] max-w-2xl">
      <span className="text-sm uppercase text-gray-400">Movie</span>
      <h1 className=" font-extrabold text-4xl ">{movie.Title}</h1>
      <div className="text-sm text-gray-300 space-x-4 mb-2">
        <span>{movie.ReleaseYear}</span>
        <span>{movie.MpaRating}</span>
        <span>{formattedDuration}</span>
      </div>
  
      <p className="text-gray-400 mb-6 line-clamp-3">{movie.Description}</p>
  
      <div className="flex gap-4 mb-4">
      <button className="bg-white text-black py-2 px-6 rounded-full font-semibold flex items-center gap-2 shadow-md hover:bg-gray-200 transition">
       <svg
        className="w-4 h-4 fill-black"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
       >
       <path d="M8 5v14l11-7z" />
       </svg>
       Play
      </button>

      <button className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-2 px-6 rounded-full font-semibold shadow-md hover:brightness-110 transition">
      More Info
      </button>
      </div>
 
    </div>
  
    </>  

  
  );
}
