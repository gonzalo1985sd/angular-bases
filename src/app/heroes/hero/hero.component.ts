import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {
  public nombre:string = 'iroman';
  public edad:number = 45;


  get capitalizedName():string{
    return this.nombre.toUpperCase();
  }

  public getHeroDescription():string{
    return `${this.nombre} tiene ${this.edad} años`;
  }
  public changeHero():void{
    this.nombre = 'Spiderman';
  }
  public changeAge():void{
    this.edad = 25;
  }
  public reset():void{
    this.nombre = 'iroman';
    this.edad = 45;
  }

}
