import React from "react";
import useMovie from "../../hooks/movie-hooks";
import * as S from "./styled";

const Profile = () => {
  const { MovieState } = useMovie();

  return (
    <S.Wrapper>
      <S.WrapperImage src={MovieState.user.poster} alt="Avatar of user" />
      <S.WrapperInfoUser>
        <div>
            <h1>{MovieState.user.title}</h1>
            <h3>{MovieState.user.year}/{MovieState.user.genre}/{MovieState.user.runtime}</h3>
        </div>
            <div>
            <h4>About:</h4>
            <span> {MovieState.user.plot}</span>
            </div>
            <div>
            <ul>Release date:{MovieState.user.release}</ul>
            <ul>Director:{MovieState.user.director}</ul>
            <ul>Actors:{MovieState.user.actors}</ul>
            </div>
      </S.WrapperInfoUser>
    </S.Wrapper>
  );
};

export default Profile;
