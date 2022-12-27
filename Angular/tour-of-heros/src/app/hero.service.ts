import { Injectable } from '@angular/core';
import { Hero } from './heros';
import { Heroes } from './mock-heros';
@Injectable({
  providedIn: 'root'
})
export class HeroService {
getHeros():Hero[]{
  return Heroes;
}
  constructor() { }
}
