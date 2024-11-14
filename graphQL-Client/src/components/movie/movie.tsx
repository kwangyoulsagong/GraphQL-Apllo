import { useMutation, useQuery } from "@apollo/client";

import { DELETE_MOVIE_Mutation, GET_MOVIES_QUERY } from "../../schema/movies";
import { movieState } from "../../types/movies";
import { Heart, Star, Play, Edit2, Trash } from "lucide-react";
import styles from "./movie.module.css";
import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { videoLinkState } from "../../recoil/videoLink";
import MovieModal from "./modal/movieModal";
import { moviesDataState } from "../../recoil/movieData";
import EditModal from "./modal/editModal";

const Movie = () => {
  const { loading, error, data } = useQuery(GET_MOVIES_QUERY);
  const [moviesData, setMoviesData] = useRecoilState(moviesDataState);
  const [, setLink] = useRecoilState(videoLinkState);
  const [isModal, setIsModal] = useState(false);
  const [isEditModal, setIsEditModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState<movieState | null>(null);
  const [deleteMovie] = useMutation(DELETE_MOVIE_Mutation);
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
  const handleEdit = (movie: movieState) => {
    console.log("blue");
    setSelectedMovie(movie);
    setIsEditModal(true);
  };
  const closeEditModal = () => {
    setIsEditModal(false);
    setSelectedMovie(null);
  };
  const handleDelete = async (id: number) => {
    console.log(id);
    try {
      const { data } = await deleteMovie({
        variables: { id },
        refetchQueries: [{ query: GET_MOVIES_QUERY }],
      });

      if (data?.deleteMovie) {
        alert(`${data.deleteMovie.id} 성공적으로 삭제되었습니다.`);
      } else {
        alert("영화를 찾을 수 없습니다.");
      }
    } catch (error) {
      console.error(error);
    }
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

                <div className={styles.playButtonWrapper}>
                  <button
                    className={styles.playButton}
                    onClick={() => handleShowVideo(movie.video)}
                  >
                    <Play className={styles.playIcon} />
                  </button>
                  <button
                    className={styles.iconButton}
                    onClick={() => handleEdit(movie)}
                  >
                    <Edit2 className={styles.icon} />
                  </button>
                  <button
                    className={styles.iconButton}
                    onClick={() => handleDelete(movie.id)}
                  >
                    <Trash className={styles.icon} />
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
      {isEditModal && selectedMovie && (
        <EditModal movie={selectedMovie} onClose={closeEditModal} />
      )}
    </div>
  );
};

export default Movie;
