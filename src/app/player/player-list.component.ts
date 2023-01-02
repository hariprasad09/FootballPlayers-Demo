import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PlayerService } from './player.service';
import { playerInterface } from './playerInterface';

@Component({
  selector: 'app-player',
  templateUrl: './player-list.component.html',
  styleUrls: ['./player-list.component.css']
})
export class PlayerListComponent implements OnInit,OnDestroy {
  public pageTitle = "Player List";

  imageWidth : number = 100;
  imageMargin : number = 2;

  showImage : boolean = true;

  private _filterText : string = '';
  errorMessage: string = '';
  sub!: Subscription;

  get filterText() : string {
    return this._filterText;
  }

  set filterText(value : string){
    this._filterText = value;
    this.playerFilter = this.performFilter(value);
  }

  playerFilter : playerInterface [] = []; //use this to retain org data

  players : playerInterface[] = [];


  constructor(private playerService : PlayerService) { }

  ngOnInit(): void {  
    // this.players = this.service.getPlayers(); //this will help me get the data from player service
    // this.playerFilter = this.players; // initialize complete list of players before filtering

    //if we use rxjs-observable we have to subscribe and unsubscribe because it keeps on going emiting data
    //three things are there when we subscribe.. next,error n complete
     this.sub = this.playerService.getPlayers().subscribe({
      next : players => {
        this.players = players;
        this.playerFilter = this.players;
      },
      error: err => this.errorMessage = err
    });
  }


  ngOnDestroy(): void{
    this.sub.unsubscribe();
  }

  hideImageFunction(): void{
    this.showImage = !this.showImage;
  }



  performFilter(filterBy: string) : playerInterface[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.players.filter(
      (playerVar: playerInterface) => 
      playerVar.playerName.toLocaleLowerCase().includes(filterBy)
      );
  }

}
