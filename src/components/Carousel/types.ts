import type { IMovie } from "../../types";

export type CaroselProps = {
    movies: IMovie[];
    onSelectMovie: (movie: IMovie) => void;
  };