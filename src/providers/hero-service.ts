import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Hero } from '../models/hero';
import { HEROES } from './hero-data';

/*
  Generated class for the HeroService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES)
  }
  constructor(public http: Http) {
    console.log('Hello HeroService Provider');
  }

}
