import { atom } from "recoil";
import { MoviesData } from "../types/movies";

export const moviesDataState = atom<MoviesData>({
  key: "moviesDataState",
  default: undefined,
});
