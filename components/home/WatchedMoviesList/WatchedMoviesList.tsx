import { Watched } from "@/interfaces/Watched";
import { WatchedMovie } from "../WatchedMovie/WatchedMovie";

interface Props {
  watched: Watched[];
  onRemoveMovie: (movie: Watched) => void;
}

export function WatchedMoviesList({ watched, onRemoveMovie }: Props) {
  return (
    <ul className="list-none 0 flex flex-col ">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          onRemoveMovie={onRemoveMovie}
        />
      ))}
    </ul>
  );
}
