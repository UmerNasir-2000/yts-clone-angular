import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { UpcomingMoviesComponent } from './components/upcoming-movies/upcoming-movies.component';

const appRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'latest',
    pathMatch: 'full',
  },
  {
    path: 'latest',
    component: MovieListComponent,
  },
  {
    path: 'upcoming',
    component: UpcomingMoviesComponent,
  },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
