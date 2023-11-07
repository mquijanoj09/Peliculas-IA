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
import { use, useEffect, useState } from "react";
import { Movie as MovieI } from "@/interfaces/Movie";
import { SelectedMovie } from "@/components/ui/SelectedMovie/SelectedMovie";
import { Watched } from "@/interfaces/Watched";
import { db } from "@/utils/firebase";
import { useRouter } from "next/navigation";
import {
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";

export default function Home() {
  {
    const [watched, setWatched] = useState<Watched[]>([]);
    const [selectedMovie, setSelectedMovie] = useState<MovieI>();
    const [query, setQuery] = useState("");
    const router = useRouter();
    const [userId, setUserId] = useState("");

    useEffect(() => {
      const user = localStorage.getItem("userId");
      setUserId(user || "");
      if (!user) router.push("/login");
    }, [router]);

    useEffect(() => {
      const starCountRef = ref(db, "users/" + userId + "/movies");
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) return;
        const dataArr = Object.values(data) as Watched[];
        setWatched(dataArr);
      });
    }, [userId]);

    const handleAddMovie = (movie: MovieI) => {
      set(ref(db, "users/" + userId + "/movies/" + movie.imdbID), movie);
      const moviesRef = ref(db, "users/" + userId + "/movies");
      onValue(moviesRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setWatched([]);
          return;
        }
        const dataArr = Object.values(data) as Watched[];
        setWatched(dataArr);
      });
      setSelectedMovie(undefined);
    };

    const handleSetSelectedMovie = (movie: MovieI) => {
      setSelectedMovie(movie);
    };

    const handleRemoveMovie = (movie: Watched) => {
      const movieRef = ref(db, "users/" + userId + "/movies/" + movie.imdbID);
      if (!movieRef) return;
      set(movieRef, null);
      const moviesRef = ref(db, "users/" + userId + "/movies");
      onValue(moviesRef, (snapshot) => {
        const data = snapshot.val();
        if (!data) {
          setWatched([]);
          return;
        }
        const dataArr = Object.values(data) as Watched[];
        setWatched(dataArr);
      });
    };

    const handleLogout = () => {
      localStorage.removeItem("userId");
      router.push("/login");
    };

    return (
      <>
        <NavBar>
          <Search query={query} setQuery={setQuery} />
          <Recomendations handleLogout={handleLogout} />
        </NavBar>

        <div className="flex items-center justify-center text-2xl">
          Bienvenido {userId}
        </div>
        <Main>
          <Box>
            <MovieList
              query={query}
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
                <SelectedMovie
                  selectedMovieID={selectedMovie.imdbID}
                  onSetAddMovie={handleAddMovie}
                  watched={watched}
                />
              </div>
            ) : (
              <>
                <WatchedSummary watched={watched} />
                <WatchedMoviesList
                  watched={watched}
                  onRemoveMovie={handleRemoveMovie}
                />
              </>
            )}
          </Box>
        </Main>
      </>
    );
  }
}
