import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { WelcomeComponent } from 'src/app/home/welcome.component';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PlayerListComponent } from './player/player-list.component';
import { RouterModule } from '@angular/router';
import { PlayerDetailComponent } from './player/player-detail/player-detail.component';
import { PlayerDetailGuard } from './player/player-detail/player-detail.guard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PlayerRatingComponent } from './player-rating/player-rating.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlayerListComponent,
    PlayerDetailComponent,
    PlayerRatingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path : 'welcome', component : WelcomeComponent},
      {path : 'player', component : PlayerListComponent},
      {
        path : 'player/player-detail/:id',
        canActivate : [PlayerDetailGuard],
        component : PlayerDetailComponent
      },
      {path : '', redirectTo: 'welcome', pathMatch: 'full'},
      {path : '**', redirectTo: 'welcome', pathMatch: 'full'}
    ]),
    NgbModule
  ],
  providers: [],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
