import Header from "../../components/header/header";
import Movie from "../../components/movie/movie";
import styles from "./home.module.css";
const Home = () => {
  return (
    <div className={styles.container}>
      <Header />
      <Movie />
    </div>
  );
};
export default Home;
