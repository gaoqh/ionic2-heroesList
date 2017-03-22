import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from '../pages/hero-detail/hero-detail';
import { HeroesComponent } from '../pages/heroes/heroes';
import { HeroService } from '../providers/hero-service';
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroDetailComponent,
    HeroesComponent
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    FormsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, HeroService]
})
export class AppModule {}
