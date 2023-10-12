import { Watched } from "@/interfaces/Watched";
import { WatchedMovie } from "../WatchedMovie/WatchedMovie";

interface Props {
  watched: Watched[];
}

export function WatchedMoviesList({ watched }: Props) {
  return (
    <ul className="list-none 0 flex flex-col ">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
}
