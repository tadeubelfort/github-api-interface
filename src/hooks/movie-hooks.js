import { useContext } from "react";
import { MovieContext } from "../providers/movie-provider";

const useMovie = () => {
  const { MovieState, getUser, getUserRepos, getUserStarred } = useContext(
    MovieContext
  );

  return { MovieState, getUser, getUserRepos, getUserStarred };
};

export default useMovie;
