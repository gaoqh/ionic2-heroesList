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

  //test pipe属性
  birthday = new Date(1988, 3, 15); // April 15, 1988
  toggle = true; // start with true == shortDate

  get format()   { return this.toggle ? 'shortDate' : 'fullDate'; }
  toggleFormat() { this.toggle = !this.toggle; }

  power = 5;
  factor = 1;
}

