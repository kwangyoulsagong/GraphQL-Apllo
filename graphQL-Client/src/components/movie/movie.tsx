// Movie.tsx
import { useQuery } from "@apollo/client";
import styles from "./movie.module.css";
import { GET_MOVIES } from "../../schema/movies";
import { movieState } from "../../types/movies";

const Movie = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);

  if (loading)
    return (
      <div className={styles.loadingContainer}>
        <div className={styles.loadingSpinner}></div>
      </div>
    );

  if (error)
    return <div className={styles.errorMessage}>Error: {error.message}</div>;

  return (
    <div className={styles.container}>
      <div className={styles.gridWrapper}>
        {data.movies.map((movie: movieState) => (
          <div key={movie.id} className={styles.movieCard}>
            <div className={styles.imageContainer}>
              <img
                src={movie.thumbnail}
                alt={movie.name}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.movieInfo}>
                  <h3 className={styles.title}>{movie.name}</h3>
                  <span className={styles.description}>
                    {movie.description}
                  </span>
                  <footer className={styles.footer}>
                    <div className={styles.rating}>
                      <span className={styles.star}>★</span>
                      <span>{movie.rating}</span>
                    </div>

                    <div className={styles.genreWrapper}>
                      {movie.genre.map((genre, index) => (
                        <span key={index}>{genre}</span>
                      ))}
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Movie;
