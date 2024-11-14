import movies from "../database/movie";
let lastId =
  movies.length > 0 ? Math.max(...movies.map((movie) => movie.id)) : 0;
const resolvers = {
  Query: {
    movies: () => movies,
    movie: (_, { id }) => {
      return movies.filter((movie) => movie.id === id)[0];
    },
  },
  Mutation: {
    addMovie: (
      _,
      { name, rating, thumbnail = "", description = "", genre = [], video = "" }
    ) => {
      // 영화 제목 중복 검사
      if (movies.find((movie) => movie.name === name)) return null;
      // 데이터베이스에 추가
      // 새 영화 객체 생성
      const newMovie = {
        id: ++lastId,
        name,
        rating,
        thumbnail,
        description,
        genre,
        video,
      };
      movies.push(newMovie);
      return newMovie;
    },
    updateMovie: (
      _,
      { id, name, rating, thumbnail, description, genre, video }
    ) => {
      // ID에 해당하는 영화 찾기
      const movie = movies.find((movie) => movie.id === id);
      if (!movie) return null;
      // 업데이트할 필드를 객체로 구성
      const fieldsToUpdate = {
        name,
        rating,
        thumbnail,
        description,
        genre,
        video,
      };
      // 각 필드를 확인하고, 정의된 값이 있는 경우에만 업데이트
      Object.keys(fieldsToUpdate).forEach((key) => {
        if (fieldsToUpdate[key] !== undefined) {
          movie[key] = fieldsToUpdate[key];
        }
      });
      return movie;
    },
  },
};
export default resolvers;
