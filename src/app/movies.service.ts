import { Injectable, Input, Output } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EventEmitter } from '@angular/core';

@Injectable()
export class MoviesService {
  
  movies:any = [];


cart:any = [];
  constructor(protected http: HttpClient) { }

  getMovies() {
    
    
   this.http.get('http://localhost:8080/movies/all').subscribe(
      (data) => { // Success
        this.movies = data;

      },
      (error) => {
        console.error(error);
      }
    );

    return this.movies


  };

  getMovie( idx: string) {       
 
     return this.movies[idx]
 
 
   };



   searchMovies( term:string ){

    let moviesArr:any[] = [];

    term = term.toLowerCase();

    for( let movie of this.movies){


      let title = movie.title.toLowerCase();
      if( title.indexOf( term ) >= 0){

        moviesArr.push( movie)

      }
    }
     
    return moviesArr;

  }

   
  addTocart(idx: number){
    let moviesArr:any[] = [];


    for( let movie of this.movies){

   
      let title = movie.title;


        moviesArr.push( movie)

    }

    
     console.log( moviesArr[idx]);

   this.cart.push(moviesArr[idx]);
console.log(this.cart)
console.log(this.cart.length)

   return this.cart;
 
    
  }


  }

 

  




