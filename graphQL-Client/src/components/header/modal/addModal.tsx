import { X } from "lucide-react";
import { useState } from "react";
import { movieState } from "../../../types/movies";
import styles from "./addModal.module.css";
interface closeModalState {
  closeModal: () => void;
}

const AddModal = ({ closeModal }: closeModalState) => {
  const [genreValue, setGenreValue] = useState("");
  const [body, setBody] = useState<movieState>({
    name: "",
    rating: 0,
    thumbnail: "",
    description: "",
    genre: [],
    video: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const { name, value } = e.target;

    if (name != "genre") {
      setBody((prev) => ({ ...prev, [name]: value }));
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
  const handleSubmit = () => {
    console.log(body);
  };

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={closeModal}>
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
              onClick={closeModal}
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

export default AddModal;
