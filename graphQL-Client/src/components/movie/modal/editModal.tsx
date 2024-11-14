import { useState } from "react";
import { movieState } from "../../../types/movies";
import styles from "./editModal.module.css";
import { X } from "lucide-react";
import { useMutation } from "@apollo/client";
import { UPDATE_MOVIE_Mutation } from "../../../schema/movies";
interface EditMovieModalProps {
  movie: movieState;

  onClose: () => void;
}

const EditModal = ({ movie, onClose }: EditMovieModalProps) => {
  const [genreValue, setGenreValue] = useState("");
  const [body, setBody] = useState<movieState>(movie);
  const [updateMovie] = useMutation(UPDATE_MOVIE_Mutation);
  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name != "genre") {
      setBody((prev) => ({
        ...prev,
        [name]: name === "rating" ? parseFloat(value) : value,
      }));
    }
  };
  const addGenre = () => {
    if (!body.genre.includes(genreValue)) {
      setBody((prev) => ({ ...prev, genre: [...prev.genre, genreValue] }));
      setGenreValue("");
    }
  };
  const removeGenre = (genre: string) => {
    setBody((prev) => ({
      ...prev,
      genre: prev.genre.filter((g) => g != genre),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await updateMovie({
        variables: {
          id: body.id,
          name: body.name,
          rating: body.rating,
          thumbnail: body.thumbnail,
          description: body.description,
          genre: body.genre,
          video: body.video,
        },
      });
      onClose();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={styles.modal} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={onClose}>
            <X className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.formContainer}>
          <h2 className={styles.title}>새로운 컨텐츠 추가</h2>

          <div className={styles.formGroup}>
            <label htmlFor="name">제목</label>
            <input
              id="name"
              name="name"
              value={body.name}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="rating">평점 (1-10)</label>
            <input
              id="rating"
              name="rating"
              type="number"
              min="1"
              max="10"
              value={body.rating}
              onChange={handleInputChange}
              className={styles.input}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="thumbnail">썸네일 URL</label>
            <input
              id="thumbnail"
              name="thumbnail"
              value={body.thumbnail}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="https://"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="description">설명</label>
            <textarea
              id="description"
              name="description"
              value={body.description}
              onChange={handleInputChange}
              className={styles.textarea}
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="genre">장르</label>
            <div className={styles.tagWrapper}>
              <input
                id="genre"
                name="genre"
                value={genreValue}
                onChange={(e) => setGenreValue(e.target.value)}
              ></input>
              <button className={styles.genreButton} onClick={addGenre}>
                추가
              </button>
            </div>
            <div className={styles.genreTags}>
              {body.genre.map((g, index) => (
                <span key={index} className={styles.genreTag}>
                  {g}
                  <button
                    type="button"
                    onClick={() => removeGenre(g)}
                    className={styles.removeGenre}
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="video">비디오 URL</label>
            <input
              id="video"
              name="video"
              value={body.video}
              onChange={handleInputChange}
              className={styles.input}
              placeholder="https://"
            />
          </div>

          <div className={styles.buttonGroup}>
            <button
              type="button"
              onClick={onClose}
              className={styles.cancelButton}
            >
              취소
            </button>
            <button className={styles.submitButton} onClick={handleSubmit}>
              저장
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;