import styles from "./header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <section className={styles.navigation}>
        <h1 className={styles.logo}>어쩔티빙</h1>
      </section>
    </header>
  );
};
export default Header;
