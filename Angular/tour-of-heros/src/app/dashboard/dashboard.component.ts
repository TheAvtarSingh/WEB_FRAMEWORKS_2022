import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { Hero } from '../heros';
import {Observable} from "rxjs";
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
heroes:Hero[] = [];

  constructor(private heroService:HeroService) { }

  ngOnInit(): void {
    this.getHeroes();
  }
getHeroes():void{
  this.heroService.getHeros().subscribe((heroes: Hero[]) => this.heroes = heroes.slice(1, 5));
}
}
