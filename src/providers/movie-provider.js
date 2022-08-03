import React, { createContext, useCallback, useState } from "react";
import api from "../services/api";

export const MovieContext = createContext({
  loading: false,
  user: {},
  repositories: [],
  starred: [],
});

const MovieProvider = ({ children }) => {
  const [MovieState, setMovieState] = useState({
    hasUser: false,
    loading: false,
    user: {
      title: undefined,
      year:0,
      rated: undefined,
      released: undefined,
      runtime: undefined,
      genre:undefined,
      director: undefined,
      actors:undefined,
      plot: undefined,
      country:undefined,
      poster:undefined
    },
    repositories: [],
    starred: [],
  });

      //Key for OMDB API
      const MY_API_KEY = "a309ab9d";

  const getUser = (username) => {
    setMovieState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api
      .get(`?t=${username}&apikey=${MY_API_KEY}`)
      .then(({ data }) => {
        setMovieState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            id: data.id,
            title:data.Title,
            year:data.Year,
            rated:data.Rated,
            released:data.Released,
            runtime:data.Runtime,
            genre:data.Genre,
            director:data.Director,
            actors:data.Actors,
            plot:data.Plot,
            country:data.Country,
            poster: data.Poster
          },
        }));
      })
      .finally(() => {
        setMovieState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  };

  const getUserRepos = (username) => {
    api.get(`users/${username}/repos`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setMovieState((prevState) => ({
        ...prevState,
        repositories: data,
      }));
    });
  };

  const getUserStarred = (username) => {
    api.get(`users/${username}/starred`).then(({ data }) => {
      console.log("data: " + JSON.stringify(data));
      setMovieState((prevState) => ({
        ...prevState,
        starred: data,
      }));
    });
  };

  const contextValue = {
    MovieState,
    getUser: useCallback((username) => getUser(username), []),
    getUserRepos: useCallback((username) => getUserRepos(username), []),
    getUserStarred: useCallback((username) => getUserStarred(username), []),
  };

  return (
    <MovieContext.Provider value={contextValue}>
      {children}
    </MovieContext.Provider>
  );
};

export default MovieProvider;
