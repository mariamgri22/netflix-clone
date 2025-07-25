import type { IMovie } from "../../types";

export interface IContentProps {
  featured: IMovie;
  trending: IMovie[];
  handleSelectMovie: (movie: IMovie) => void;
}
