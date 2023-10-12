"use client";
import { AiForm, NavBar, Recomendations } from "@/components";
import { Movie } from "@/interfaces/Movie";

interface Props {
  aiSelectedMovie: Movie;
}

export default function AiRecomendations({ aiSelectedMovie }: Props) {
  return (
    <>
      <NavBar className="grid-cols-2">
        <Recomendations className="underline" />
      </NavBar>
      <AiForm aiSelectedMovie={aiSelectedMovie} />
    </>
  );
}
