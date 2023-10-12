import { Movie } from "@/interfaces/Movie";
import { twMerge } from "tailwind-merge";

interface Props {
  movie: Movie;
  onClick: (movie: Movie) => void;
  selectedMovieId?: string;
}

export function Movie({ movie, onClick, selectedMovieId }: Props) {
  const isSelected = selectedMovieId === movie.imdbID;

  return (
    <li
      onClick={() => onClick(movie)}
      className={twMerge(
        "relative flex gap-x-10 text-xl items-center border-b border-lighter-grey py-6 px-12 cursor-pointer",
        isSelected && "bg-lighter-grey"
      )}
    >
      <img
        src={movie.Poster}
        alt={`${movie.Title} poster`}
        className="w-20 row-start-1 row-end-(-1)"
      />
      <div className="flex flex-col gap-3">
        <h3 className="text-3xl font-semibold	">{movie.Title}</h3>
        <div className="flex align-center gap-10">
          <p className="flex items-center gap-3 text-2xl ">
            <span>🗓</span>
            <span>{movie.Year}</span>
          </p>
        </div>
      </div>
    </li>
  );
}
