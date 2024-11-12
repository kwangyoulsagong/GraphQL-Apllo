import { useQuery } from "@apollo/client";

import { GET_MOVIES } from "../../schema/movies";
import { movieState } from "../../types/movies";
import { Heart, Star, Play } from "lucide-react";
import styles from "./movie.module.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { videoLinkState } from "../../recoil/videoLink";
import MovieModal from "./modal/movieModal";
import { moviesDataState } from "../../recoil/movieData";

const Movie = () => {
  const { loading, error, data } = useQuery(GET_MOVIES);
  const [moviesData, setMoviesData] = useRecoilState(moviesDataState);
  const [, setLink] = useRecoilState(videoLinkState);
  const [isModal, setIsModal] = useState(false);
  const handleShowVideo = (link: string) => {
    setIsModal(true);
    setLink(link);
  };

  useEffect(() => {
    if (data) {
      setMoviesData(data);
    }
  }, [data, setMoviesData]);
  const closeModal = () => {
    setIsModal(false);
  };
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
        {moviesData?.movies.map((movie: movieState) => (
          <div key={movie.id} className={styles.movieCard}>
            <div className={styles.imageWrapper}>
              <img
                src={movie.thumbnail}
                alt={movie.name}
                className={styles.image}
              />
              <div className={styles.overlay}>
                <div className={styles.likeButton}>
                  <button className={styles.iconButton}>
                    <Heart className={styles.icon} />
                  </button>
                </div>

                <div
                  className={styles.playButtonWrapper}
                  onClick={() => handleShowVideo(movie.video)}
                >
                  <button className={styles.playButton}>
                    <Play className={styles.playIcon} />
                  </button>
                </div>

                <div className={styles.movieInfo}>
                  <h3 className={styles.title}>{movie.name}</h3>
                  <p className={styles.description}>{movie.description}</p>

                  <div className={styles.footer}>
                    <div className={styles.rating}>
                      <Star className={styles.starIcon} />
                      <span>{movie.rating}</span>
                    </div>
                    <div className={styles.genreWrapper}>
                      {movie.genre.map((genre, index) => (
                        <span key={index} className={styles.genreTag}>
                          {genre}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {isModal ? <MovieModal closeModal={closeModal} /> : null}
    </div>
  );
};

export default Movie;