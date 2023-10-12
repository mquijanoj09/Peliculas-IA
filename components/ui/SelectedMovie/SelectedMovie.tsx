import { Movie } from "@/interfaces/Movie";
import StarRating from "../StarRating/StarRating";
import { useEffect, useState } from "react";

interface Props {
  selectedMovie: Movie;
}

export function SelectedMovie({ selectedMovie }: Props) {
  const [userRating, setUserRating] = useState<number>();

  useEffect(() => {
    setUserRating(selectedMovie.userRating);
  }, [selectedMovie]);

  return (
    <div>
      <div className="flex bg-lighter-grey">
        <img src={selectedMovie.Poster} alt="Movie Poster" className="w-80" />
        <div className="flex flex-col flex-1 px-10 pt-16 gap-11 items-start">
          <h2 className="text-4xl font-semibold">{selectedMovie.Title}</h2>
          <div className="flex flex-col gap-4">
            <p className="text-2xl ">
              {selectedMovie.Year} <span className="text-2xl"> • X min</span>{" "}
            </p>
            <p className="text-2xl ">Genero</p>
            <p className="text-2xl ">⭐️ X IMDb rating</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col align-center justify-center gap-4 rounded-xl mx-10 mt-16 mb-11 p-8 bg-lighter-grey">
        <StarRating
          maxRating={10}
          color="#FBBF24"
          size={24}
          onSetRating={setUserRating}
          rating={userRating}
        />
        {userRating && userRating > 0 && (
          <button className="bg-dark-purple text-white border-none rounded-full text-lg text-bold p-4 cursor-pointer hover:bg-light-purple">
            + Add to list
          </button>
        )}
      </div>
      <div className="flex flex-col m-10 mt-0 text-2xl gap-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
          obcaecati repellat laudantium incidunt facere, non iste aut id nisi
          enim officia sapiente quod culpa, sit a minus dolore eum sunt.
        </p>
        <p>Starring Leonardo DiCaprio, Pablo Quijano, Clara Jaramillo</p>
        <p>Directed by Miguel Quijano</p>
      </div>
    </div>
  );
}
