import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesComponent } from '../movies/movies.component';
import { Router } from "@angular/router";
import { MoviesService } from 'src/app/movies.service';


@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styles: []
})
export class MovieComponent  {

  movie:any = [];

  constructor(protected moviesService: MoviesService,
    private activatedRoute: ActivatedRoute) {

      this.activatedRoute.params.subscribe( params => this.movie = this.moviesService.getMovie( params['id']))
}







}