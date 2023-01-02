import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlayerService } from '../player.service';
import { playerInterface } from '../playerInterface';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.css']
})
export class PlayerDetailComponent implements OnInit {
  
  pageTitle : string = 'Player Detail';
  playerDetail : playerInterface | undefined;
  errMessage : string = '';

  //Router is used to navigate back n forth
  constructor(private activatedRouteVar: ActivatedRoute,
              private routerVar : Router,
              private playerService: PlayerService ){
  }

  
  ngOnInit(): void {
    const id = Number(this.activatedRouteVar.snapshot.paramMap.get('id'));

    if(id){
      this.getPlayerWithId(id);  
    }
  }

  //subscribe to the observable in player service 
  getPlayerWithId(id: number) : void {
    this.playerService.getPlayerWithId(id).subscribe({
      next : playerDetails => this.playerDetail = playerDetails,
      error : err => this.errMessage = err
    });
  }

  onBack(): void{
    this.routerVar.navigate(['/player']);
  }
}
