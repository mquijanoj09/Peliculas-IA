import { Watched } from "@/interfaces/Watched";

interface Props {
  movie: Watched;
  onRemoveMovie: (movie: Watched) => void;
}

export function WatchedMovie({ movie, onRemoveMovie }: Props) {
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
            <span>{movie.Runtime}</span>
          </p>
        </div>
        <button
          onClick={() => onRemoveMovie(movie)}
          className="absolute top-3 right-3 h-10 aspect-square rounded-full border-none bg-slate-950 text-white text-2xl font-bold cursor-pointer	z-10 flex justify-center items-center hover:bg-slate-900 hover:no-underline"
        >
          x
        </button>
      </div>
    </li>
  );
}
