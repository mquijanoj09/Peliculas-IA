import { useState } from "react";

export function Search() {
  const [query, setQuery] = useState("");

  return (
    <input
      className="justify-self-center border-none px-6 py-4 rounded-xl transition-all	w-40rem bg-light-purple text-2xl"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
