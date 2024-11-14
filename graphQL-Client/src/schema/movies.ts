import { gql } from "@apollo/client";

export const GET_MOVIES_QUERY = gql`
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
export const ADD_MOVIE_MUTATION = gql`
  mutation AddMovie(
    $name: String!
    $rating: Float!
    $thumbnail: String!
    $description: String!
    $genre: [String!]
    $video: String!
  ) {
    addMovie(
      name: $name
      rating: $rating
      thumbnail: $thumbnail
      description: $description
      genre: $genre
      video: $video
    ) {
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
