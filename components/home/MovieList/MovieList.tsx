import { Movie as MovieI } from "@/interfaces/Movie";
import { Movie } from "../Movie/Movie";

interface Props {
  movies: MovieI[];
  onSelectedMovie: (movie: MovieI) => void;
  selectedMovieId?: string;
}

export function MovieList({ movies, onSelectedMovie, selectedMovieId }: Props) {
  return (
    <ul className="list-none flex flex-col">
      {movies?.map((movie) => (
        <Movie
          onClick={onSelectedMovie}
          movie={movie}
          key={movie.imdbID}
          selectedMovieId={selectedMovieId}
        />
      ))}
    </ul>
  );
}
