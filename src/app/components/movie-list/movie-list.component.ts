import { Component, OnInit } from '@angular/core';
import { IMovie } from 'src/app/models/response.model';
import { MovieService } from 'src/app/services/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css'],
})
export class MovieListComponent implements OnInit {
  latestMovies: IMovie[] = [];
  constructor(private readonly movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.fetchMovies('action').subscribe(({ data }) => {
      this.latestMovies = data.movies;
    });
  }
}
