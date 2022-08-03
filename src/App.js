import React from "react";
import Layout from "./components/layout";
import NoSearch from "./components/no-search";
import Profile from "./components/profile";
import useMovie from "./hooks/movie-hooks";

const App = () => {
  const { MovieState } = useMovie();
  return (
    <Layout>
      {MovieState.hasUser ? (
        <>
          {MovieState.loading ? (
            <p>Loading</p>
          ) : (
            <>
              <Profile />
            </>
          )}
        </>
      ) : (
        <NoSearch />
      )}
    </Layout>
  );
};

export default App;
