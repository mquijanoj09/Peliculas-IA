import { Box, Button, ButtonLink, SelectedMovie } from "@/components";
import { aiSelectedMovie } from "@/data/tempAiMovie";
import { set } from "firebase/database";
import { FormEvent, use, useEffect, useState } from "react";

export function AiForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [random1, setRandom1] = useState<number>();
  const [random2, setRandom2] = useState<number>();

  useEffect(() => {
    const ran1 = Math.floor(Math.random() * 9);
    let ran2 = Math.floor(Math.random() * 9);
    if (ran2 === ran1) {
      ran2 = ran2 + 1;
    }
    setRandom2(ran2);
    setRandom1(ran1);
  }, []);

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
        <label className="text-3xl">¿How are you feeling today?</label>
        <input
          type="text"
          name="name"
          id="name"
          className="bg-lighter-grey rounded-lg shadow-md text-2xl px-6 py-4 text-left flex-1"
          required
        />
      </div>
      <div className="flex gap-8 items-center">
        <label className="text-3xl">¿What is your favorite genre?</label>
        <input
          type="text"
          name="genre"
          id="genre"
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
          {random1 !== undefined && (
            <SelectedMovie
              selectedMovieID={aiSelectedMovie[random1]}
              ratingDisabled
            />
          )}
        </Box>
        <Box>
          {random2 !== undefined && (
            <SelectedMovie
              selectedMovieID={aiSelectedMovie[random2]}
              ratingDisabled
            />
          )}
        </Box>
      </div>
    </div>
  );
}
