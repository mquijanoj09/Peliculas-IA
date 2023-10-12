"use client";

import {
  Box,
  MovieList,
  NavBar,
  Main,
  Search,
  WatchedMoviesList,
  WatchedSummary,
  Recomendations,
} from "@/components";
import { useState } from "react";
import { tempMovieData } from "@/data/tempMovieData";
import { tempWatchedData } from "@/data/tempWatchedData";
import { Movie as MovieI } from "@/interfaces/Movie";
import { SelectedMovie } from "@/components/ui/SelectedMovie/SelectedMovie";

export default function Home() {
  {
    const [movies, setMovies] = useState(tempMovieData);
    const [watched, setWatched] = useState(tempWatchedData);
    const [selectedMovie, setSelectedMovie] = useState<MovieI>();

    const handleSetSelectedMovie = (movie: MovieI) => {
      setSelectedMovie(movie);
    };

    return (
      <>
        <NavBar>
          <Search />
          <Recomendations />
        </NavBar>

        <Main>
          <Box>
            <MovieList
              movies={movies}
              onSelectedMovie={handleSetSelectedMovie}
              selectedMovieId={selectedMovie?.imdbID}
            />
          </Box>

          <Box>
            {selectedMovie ? (
              <div>
                <button
                  onClick={() => setSelectedMovie(undefined)}
                  className="absolute top-3 right-3 h-10 aspect-square rounded-full border-none bg-slate-950 text-white text-2xl font-bold cursor-pointer	z-10 flex justify-center items-center hover:bg-slate-900 hover:no-underline"
                >
                  x
                </button>
                <SelectedMovie selectedMovie={selectedMovie} />
              </div>
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList watched={watched} />
              </>
            )}
          </Box>
        </Main>
      </>
    );
  }
}
