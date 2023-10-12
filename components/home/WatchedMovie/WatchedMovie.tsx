import { Watched } from "@/interfaces/Watched";

interface Props {
  movie: Watched;
}

export function WatchedMovie({ movie }: Props) {
  return (
    <li className="relative flex gap-x-10 text-xl items-center border-b border-lighter-grey py-6 px-12">
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-20 row-start-1 row-end-(-1)"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-semibold	">{movie.Title}</h3>
        <div className="flex align-center gap-10">
          <p className="flex items-center gap-3 text-2xl ">
            <span>⭐️</span>
            <span>{movie.imdbRating}</span>
          </p>
          <p className="flex items-center gap-3 text-2xl">
            <span>🌟</span>
            <span>{movie.userRating}</span>
          </p>
          <p className="flex items-center gap-3 text-2xl">
            <span>⏳</span>
            <span>{movie.runtime} min</span>
          </p>
        </div>
      </div>
    </li>
  );
}
