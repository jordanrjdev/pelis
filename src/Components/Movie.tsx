import { Movie as IMovie } from "../types";
import styled from "styled-components";
import * as themeConfig from "../theme";

const MovieWrapper = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background: ${themeConfig.inputBackgroundColor};
  border-radius: 4px;
  max-width: 150px;
  margin: 1em;
`;

const MovieImage = styled.img`
  height: 225px;
  width: 100%;
`;

const MovieTitle = styled.h3`
  font-size: 1rem;
  text-align: start;
  margin: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0.7em;
`;

export default function Movie({
  movie,
}: {
  movie: IMovie;
}): React.ReactElement {
  return (
    <MovieWrapper>
      <MovieImage
        src={
          movie.backdrop_path
            ? process.env.REACT_APP_URL_BACKDROP + movie.backdrop_path
            : "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-38-picture-grey-c2ebdbb057f2a7614185931650f8cee23fa137b93812ccb132b9df511df1cfac.svg"
        }
      />
      <MovieTitle>{movie.title}</MovieTitle>
    </MovieWrapper>
  );
}
