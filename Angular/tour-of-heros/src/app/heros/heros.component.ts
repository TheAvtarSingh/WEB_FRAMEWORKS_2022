import { Component, OnInit } from '@angular/core';
import { Hero } from '../heros';
import { Heroes } from '../mock-heros';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css'],
})
export class HerosComponent implements OnInit {
selectedHero :Hero;

onSelect(hero:Hero):void{
  this.selectedHero = hero;
}



// heros = Heroes;
heros : Hero[] = [];
  hero: Hero = { id: 1, name: 'BigBoi' };
  constructor(private heroService : HeroService) {}
getHeroes() : void{
  this.heros = this.heroService.getHeros();
}
  ngOnInit(): void {
    this.getHeroes();
  }
}
