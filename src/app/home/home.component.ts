import { Component } from '@angular/core';
import { HomeService } from './home.service';
import { Player } from './player';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private homeService: HomeService) {}

  player: Player = new Player();

  teamsData: { [key: string]: string[] } = {};

  isLoading: boolean = false;

  

  onSubmit() {
    this.addNewPlayer();
    this.isLoading = true;
  }

  getTeams(): void {
    this.homeService.getTeams().subscribe(
      (data) => {
        this.teamsData = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  addNewPlayer(): void {
    this.homeService.addNewPlayer(this.player).subscribe(
      (data: Player) => {
        this.player = new Player();
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  deleteAll(): void {
    this.homeService.deleteAll().subscribe(
      (data: any) => {
        this.teamsData = {};
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
