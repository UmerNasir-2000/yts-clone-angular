import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IData, IMovie, IResponse } from '../models/response.model';

@Injectable({
  providedIn: 'root',
})
export class MovieService {
  readonly BASE_API_URL = environment.apiURL;
  constructor(private readonly httpClient: HttpClient) {}

  fetchMovies(genre: string) {
    const params = new HttpParams();

    params.append('page', 1);
    params.append('genre', genre);

    try {
      return this.httpClient.get<IResponse<IData<IMovie>>>(
        `${this.BASE_API_URL}/movie-list`,
        {
          params,
        }
      );
    } catch (error) {
      console.log(error);
      throw new Error('Http Exception');
    }
  }
}
