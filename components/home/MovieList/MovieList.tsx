import { Movie as MovieI } from "@/interfaces/Movie";
import { Movie } from "../Movie/Movie";
import { useMovies } from "@/hooks/useMovies";

interface Props {
  query: string;
  onSelectedMovie: (movie: MovieI) => void;
  selectedMovieId?: string;
}

export function MovieList({ query, onSelectedMovie, selectedMovieId }: Props) {
  const { movies, isLoading, error } = useMovies(query);

  if (isLoading)
    return <div className="text-4xl text-center mt-20">Loading...</div>;
  if (error)
    return (
      <div className="text-4xl text-center mt-20">Movie not found ⛔️</div>
    );
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
