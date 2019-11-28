import {RouterModule, Routes  } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MovieComponent } from './components/movie/movie.component';
import { SearchComponent } from './components/search/search.component';





const APP_ROUTES: Routes = [
    
{ path: 'movies', component: MoviesComponent },
{ path: 'about', component: AboutComponent },
{ path: 'movie/:id', component: MovieComponent },
{ path: 'search/:term', component: SearchComponent },
{path: 'movies', pathMatch: 'full',  redirectTo:'movies' }

];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
