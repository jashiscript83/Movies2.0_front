import { Component, OnInit,Output } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styles: []
})
export class MoviesComponent implements OnInit {
  title = 'moviesClub';
  movies: any[] =[]

   cart: any = [];

   total:number;



  constructor(private moviesService: MoviesService,
               private router:Router ) {
  }
  ngOnInit() {
   this.movies = this.moviesService.getMovies()
   console.log(this.total)
    console.log(this.movies)
    

  }
  seeMovie( idx:number){

    this.router.navigate(['/movie',idx])
  
  
  
  }

  reactiveAdd(idx:number){
    this.cart =   this.moviesService.addTocart(idx)
    this.total = this.cart.length * 2.99;
  

    console.log(this.cart)

  }
  delete(idx:number){

this.cart.length = this.cart.length - 1;


}
}