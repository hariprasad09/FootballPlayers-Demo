import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, tap, throwError, map } from 'rxjs';
import { playerInterface } from './playerInterface';

@Injectable({
  providedIn: 'root'
})

export class PlayerService {
  
  private productUrl = "api/players.json";

  constructor(private http : HttpClient) { }

  //tap is used for debugging n logging emited things

  getPlayers() : Observable<playerInterface[]> {
    return this.http.get<playerInterface[]>(this.productUrl)
    .pipe(
      tap(data => console.log('All: ', JSON.stringify(data))),
      catchError(this.handleError)
    ); 
  }


  // Get one product
  // Since we are working with a json file, we can only retrieve all products
  // So retrieve all products and then find the one we want using 'map'

  getPlayerWithId(id:number) : Observable<playerInterface | undefined>{
    return this.getPlayers().pipe(
      map((players: playerInterface[]) => players.find(p => p.playerId === id))
    )
  }


  private handleError(err: HttpErrorResponse): Observable<never> {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }

}


