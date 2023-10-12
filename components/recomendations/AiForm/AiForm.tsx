import { AiSelection, Box, Button, ButtonLink } from "@/components";
import { Movie } from "@/interfaces/Movie";
import { FormEvent, useState } from "react";

interface Props {
  aiSelectedMovie: Movie;
}

export function AiForm({ aiSelectedMovie }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsOpen(true);
  };

  return !isOpen ? (
    <form
      onSubmit={handleOnSubmit}
      className="bg-dark-grey mx-auto mt-36 text-4xl px-36 py-16 max-w-7xl rounded-xl flex justify-center flex-col gap-20 shadow-lg relative"
    >
      <ButtonLink
        href="/"
        className="absolute top-3 right-3 h-10 aspect-square rounded-full border-none bg-slate-950 text-white text-2xl font-bold cursor-pointer	z-10 flex justify-center items-center hover:bg-slate-900 hover:no-underline"
      >
        x
      </ButtonLink>
      <h1 className="text-5xl font-semibold text-center">
        AI Recomendations 🤖
      </h1>
      <div className="flex gap-8 items-center flex-1">
        <label className="text-3xl">Enter your name: </label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-lighter-grey rounded-lg shadow-md text-2xl px-6 py-4 text-left flex-1"
          required
        />
      </div>
      <div className="flex gap-8 items-center">
        <label className="text-3xl">Enter your email: </label>
        <input
          type="email"
          name="email"
          id="email"
          className="bg-lighter-grey rounded-lg shadow-md text-2xl px-6 py-4 text-left flex-1"
          required
        />
      </div>
      <div className="text-center">
        <Button className="px-6 py-4" type="submit">
          Generate
        </Button>
      </div>
    </form>
  ) : (
    <div>
      <h1 className="text-5xl font-semibold text-center ">
        Recomended for you 🍿
      </h1>
      <div className="mt-10 flex gap-10 justify-center h-[calc(100vh-7.2rem-3*4.8rem)]">
        <Box>
          <AiSelection aiSelectedMovie={aiSelectedMovie} />
        </Box>
        <Box>
          <AiSelection aiSelectedMovie={aiSelectedMovie} />
        </Box>
      </div>
    </div>
  );
}
