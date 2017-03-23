import { Injectable, Pipe, PipeTransform } from '@angular/core';

/*
  Generated class for the Powerup pipe.

  See https://angular.io/docs/ts/latest/guide/pipes.html for more info on
  Angular 2 Pipes.
*/
@Pipe({
  name: 'powerup'
})
@Injectable()
export class Powerup implements PipeTransform{
  /*
    Takes a value and makes it lowercase.
   */
  transform(value: number, exponent: string): number {
    let exp = parseFloat(exponent);
    return Math.pow(value, isNaN(exp) ? 1 : exp);
  }
}
