import { useState } from "react";
import styles from "./header.module.css";
import AddModal from "./modal/addModal";

const Header = () => {
  const [isModal, setIsModal] = useState(false);
  const handleShowModal = () => {
    setIsModal(true);
  };
  const closeModal = () => {
    setIsModal(false);
  };
  return (
    <header className={styles.container}>
      <section className={styles.navigation}>
        <h1 className={styles.logo}>어쩔티빙</h1>
        <button onClick={handleShowModal}>동영상 추가</button>
      </section>
      {isModal ? <AddModal closeModal={closeModal} /> : null}
    </header>
  );
};
export default Header;
