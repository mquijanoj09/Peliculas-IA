import { Movie } from "@/interfaces/Movie";
import StarRating from "../StarRating/StarRating";
import { useEffect, useState } from "react";
import { Watched } from "@/interfaces/Watched";
import { getDatabase, ref, set } from "firebase/database";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";

interface Props {
  selectedMovieID: string;
  onSetAddMovie?: (movie: Watched) => void;
  watched?: Watched[];
  ratingDisabled?: boolean;
}

const KEY = "918a791a";

export function SelectedMovie({
  selectedMovieID,
  onSetAddMovie,
  watched,
  ratingDisabled,
}: Props) {
  const watchedMovie = watched?.find(
    (watchedMovie) => watchedMovie.imdbID === selectedMovieID
  );
  const [userRating, setUserRating] = useState<number>(
    watchedMovie?.userRating || 0
  );
  const [movie, setMovie] = useState<Movie>();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const [userId, setUserId] = useState("");

  useEffect(() => {
    const user = localStorage.getItem("userId");
    setUserId(user || "");
  }, []);

  useEffect(() => {
    const watchedMovie = watched?.find(
      (watchedMovie) => watchedMovie.imdbID === selectedMovieID
    );
    setUserRating(watchedMovie?.userRating || 0);
  }, [selectedMovieID, watched, userId]);

  useEffect(
    function () {
      async function getMovieDetails() {
        setIsLoading(true);
        const res = await fetch(
          `http://www.omdbapi.com/?apikey=${KEY}&i=${selectedMovieID}`
        );
        const data = await res.json();
        setMovie(data);
        setIsLoading(false);
      }
      getMovieDetails();
    },
    [selectedMovieID]
  );

  if (!movie) return <div>Loading</div>;
  return (
    <div>
      <div className="flex bg-lighter-grey">
        <img src={movie.Poster} alt="Movie Poster" className="w-80" />
        <div className="flex flex-col flex-1 px-10 pt-16 gap-11 items-start">
          <h2 className="text-4xl font-semibold">{movie.Title}</h2>
          <div className="flex flex-col gap-4">
            <p className="text-2xl ">
              {movie.Year} <span className="text-2xl"> • {movie.Runtime}</span>{" "}
            </p>
            <p className="text-2xl ">{movie.Genre}</p>
            <p className="text-2xl ">⭐️ {movie.imdbRating} IMDb rating</p>
          </div>
        </div>
      </div>
      {!ratingDisabled && (
        <div className="flex flex-col align-center justify-center gap-4 rounded-xl mx-10 mt-16 mb-11 p-8 bg-lighter-grey">
          {!watchedMovie && (
            <StarRating
              maxRating={10}
              color="#FBBF24"
              size={24}
              onSetRating={setUserRating}
              rating={userRating}
            />
          )}
          {userRating > 0 && !watchedMovie && (
            <button
              onClick={() =>
                onSetAddMovie && onSetAddMovie({ ...movie, userRating })
              }
              className="bg-dark-purple text-white border-none rounded-full text-lg text-bold p-4 cursor-pointer hover:bg-light-purple"
            >
              + Add to list
            </button>
          )}
          {watchedMovie && (
            <p className="text-2xl">
              You rated this movie {watchedMovie.userRating} stars
            </p>
          )}
        </div>
      )}
      <div className="flex flex-col m-10 mt-10 text-2xl gap-8">
        <p>{movie.Plot}</p>
        <p>Starring: {movie.Actors}</p>
        <p>Directed by {movie.Director}</p>
      </div>
    </div>
  );
}
