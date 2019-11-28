import { Component, OnInit, Output, Input } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { MoviesComponent } from '../movies.component';
import { ActivatedRoute } from "@angular/router";
import { EventEmitter } from '@angular/core';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: []
})
export class CartComponent {

@Input()cart: any;

  
  constructor(private activatedRoute: ActivatedRoute,
              private moviesService: MoviesService,
        
               ) {

                 
console.log("hello cart")
                
                }


 
 




}