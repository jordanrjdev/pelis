export interface ThemeContext {
  mode: string;
  toggle(): void;
}

export type Movie = {
  backdrop_path: string | null;
  id: number;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  vote_average: number;
  vote_count: number;
};
