import { gql } from "@apollo/client";

export const GET_MOVIES = gql`
  query {
    movies {
      id
      name
      rating
      thumbnail
      description
      genre
      video
    }
  }
`;
