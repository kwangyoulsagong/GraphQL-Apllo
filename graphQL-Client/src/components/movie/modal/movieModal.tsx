// MovieModal.tsx
import { useRecoilValue } from "recoil";
import { videoLinkState } from "../../../recoil/videoLink";
import { X } from "lucide-react";
import styles from "./movieModal.module.css";

interface closeModalState {
  closeModal: () => void;
}

const MovieModal = ({ closeModal }: closeModalState) => {
  const link = useRecoilValue(videoLinkState);

  // YouTube URL에서 비디오 ID 추출
  const getYoutubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const videoId = getYoutubeVideoId(link);
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=0`;

  return (
    <div className={styles.modal} onClick={closeModal}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <div className={styles.modalHeader}>
          <button className={styles.closeButton} onClick={closeModal}>
            <X className={styles.closeIcon} />
          </button>
        </div>
        <div className={styles.videoContainer}>
          {videoId ? (
            <iframe
              src={embedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className={styles.videoFrame}
            />
          ) : (
            <div className={styles.errorMessage}>Invalid YouTube URL</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
