import React, { useState } from "react";
import * as S from "./styled";
import useMovie from "../../hooks/movie-hooks";

const Header = () => {
  const { getUser } = useMovie();
  const [usernameForSearch, setUsernameForSearch] = useState();

  const submitGetUser = () => {
    if (!usernameForSearch) return;
    return getUser(usernameForSearch);
  };

  return (
    <header>
      <S.Wrapper>
        <input
          type="text"
          placeholder="Type a movie title..."
          onChange={(event) => setUsernameForSearch(event.target.value)}
        />
        <button type="submit" onClick={submitGetUser}>
          <span>Search</span>
        </button>
      </S.Wrapper>
    </header>
  );
};

export default Header;
