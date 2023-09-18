import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Player } from './player';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http:HttpClient) { };

  private url = 'https://football-manager-pfz3.onrender.com';
 
  public getTeams(): Observable<any> {
    return this.http.get<any>(`${this.url}/times`);
  }

  public addNewPlayer(player: Player): Observable<Player> {
    return this.http.post<Player>(`${this.url}/jogador`, player);
  }
  public deleteAll(): Observable<any> {
    return this.http.delete<any>(`${this.url}/jogador/all`);
  }
}