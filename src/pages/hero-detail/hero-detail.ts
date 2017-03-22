import { Component, Input} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Hero } from '../../models/hero';
/*
  Generated class for the HeroDetail page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-hero-detail',
  templateUrl: 'hero-detail.html'
})
export class HeroDetailComponent {
  @Input()
  hero: Hero;

}
