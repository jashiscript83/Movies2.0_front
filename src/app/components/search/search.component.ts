import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { MoviesService } from 'src/app/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {

  movies:any = []
  term:string;
  constructor( private activatedRoute: ActivatedRoute,
    private moviesService:MoviesService) { }

  ngOnInit() {
  
    this.activatedRoute.params.subscribe( params => {

      this.term = params['term'];
      this.movies = this.moviesService.searchMovies( params['term'])
       
      console.log(this.movies)


    })


    
  


  }


}
