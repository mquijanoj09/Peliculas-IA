import { SelectedMovie } from "@/components";
import { Movie } from "@/interfaces/Movie";

interface Props {
  aiSelectedMovie: Movie;
}

export function AiSelection({ aiSelectedMovie }: Props) {
  aiSelectedMovie = {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
  };
  return (
    <div>
      <SelectedMovie selectedMovie={aiSelectedMovie} />
    </div>
  );
}
