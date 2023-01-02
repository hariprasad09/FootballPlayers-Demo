import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-player-rating',
  templateUrl: './player-rating.component.html',
  styleUrls: ['./player-rating.component.css']
})
export class PlayerRatingComponent {

  ratingCount : number = 0;
  totalRating : number = 0;

  FinalRating : any;

  ratingControl = new FormControl();

  savePlayerRating(){
  
    this.totalRating = this.ratingControl?.value || 0 ;
    console.log(this.totalRating);

    //let localRating = this.ratingCount++;
    //localStorage.setItem('RatingCount', JSON.stringify(localRating)) ;


    this.FinalRating = (this.totalRating/this.ratingCount).toFixed(2);
  }
}
