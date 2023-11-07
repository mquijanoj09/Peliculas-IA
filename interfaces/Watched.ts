import { Movie } from "./Movie";

export interface Watched extends Movie {
  userRating: number;
}
