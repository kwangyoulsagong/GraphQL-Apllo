import { gql } from "apollo-server";
// Query : 데이터베이스에서 데이터를 읽는 요청
// Mutation : 데이터베이스를 수정하는 요청

// 스키마엔 Movie의 구조와 자료형도 정의해야 한다. 그래야 GraphQL 서버에서 데이터베이스 구조를 알고 처리할 수 있다.

// 위 파일은 다음을 의미한다. 서버에 Query 형태로 movies를 요청하면 Movie의 배열이 반드시 반환된다.

// 서버에 Mutation 형태로 파라미터와 함께 addMovie를 요청하면 Movie가 반드시 반환된다.

// ! : Not Nullable. 데이터가 꼭 있어야 한다.
// [] : 배열

const typeDefs = gql`
  type Movie {
    id: Int!
    name: String!
    rating: Float!
    thumbnail: String
    description: String
    genre: [String!]
  }

  type Query {
    movies: [Movie!]
    movie(id: Int!): Movie
  }

  type Mutation {
    addMovie(
      name: String!
      rating: Float!
      thumbnail: String
      description: String
      genre: [String!]
    ): Movie!
  }
`;
export default typeDefs;
