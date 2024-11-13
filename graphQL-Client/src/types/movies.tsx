export interface movieState {
  id?: number;
  name: string;
  rating: number;
  thumbnail: string;
  description: string;
  genre: string[];
  video: string;
}
export interface MoviesData {
  movies: movieState[];
}
