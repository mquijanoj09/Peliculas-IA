import { Watched } from "@/interfaces/Watched";

const average = (arr: number[]) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

interface Props {
  watched: Watched[];
}

export function WatchedSummary({ watched }: Props) {
  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  // const paragraphs = document.querySelectorAll("p");
  // console.log(paragraphs);

  // paragraphs.forEach((p) => {
  //   p.classList.add("flex items-center gap-3 text-blue");
  // });

  return (
    <div className="pt-9 px-14 pb-7 bg-lighter-grey shadow-md	">
      <h2 className="uppercase text-2xl mb-3 font-bold">Movies you watched</h2>
      <div className="flex items-center gap-10 text-xl font-semibold">
        <p className="flex items-center gap-3 text-blue text-2xl">
          <span>#️⃣</span>
          <span>{watched.length} movies</span>
        </p>
        <p className="flex items-center gap-3 text-blue text-2xl">
          <span>⭐️</span>
          <span>{avgImdbRating}</span>
        </p>
        <p className="flex items-center gap-3 text-blue text-2xl">
          <span>🌟</span>
          <span>{avgUserRating}</span>
        </p>
        <p className="flex items-center gap-3 text-blue text-2xl">
          <span>⏳</span>
          <span>{avgRuntime} min</span>
        </p>
      </div>
    </div>
  );
}
