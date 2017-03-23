import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Hero } from '../../models/hero';
import { HeroDetailComponent } from '../hero-detail/hero-detail';
import { HeroService } from '../../providers/hero-service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'page-heroes',
  templateUrl: 'heroes.html'
})
export class HeroesComponent implements OnInit {
    ngOnInit(): void {
      this.getHeroes()
    }

  heroes: Hero[];
  selectedHero: Hero;

  constructor(public navCtrl: NavController, private heroService: HeroService) {
    
  }

  getHeroes() {
    this.heroService.getHeroes().then(heroes =>
    this.heroes = heroes
    );
  }

  onSelect(hero: Hero) {
    this.selectedHero = hero
    console.log(hero.name)
  }
}

