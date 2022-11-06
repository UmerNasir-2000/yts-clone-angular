export interface IResponse<T> {
  status: string;
  status_message: string;
  data: T;
}

export interface IData<T> {
  movie_count: number;
  limit: number;
  page_number: number;
  movies: T[];
}

export interface IMovie {
  id: number;
  url: string;
  title: string;
  slug: string;
  medium_cover_image: string;
}
