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

export const UPDATE_MOVIE_Mutation = gql`
  mutation UpdateMovie(
    $id: Int!
    $name: String
    $rating: Float
    $thumbnail: String
    $description: String
    $genre: [String]
    $video: String
  ) {
    updateMovie(
      id: $id
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
export const DELETE_MOVIE_Mutation = gql`
  mutation DeleteMovie($id: Int!) {
    deleteMovie(id: $id) {
      id
    }
  }
`;
