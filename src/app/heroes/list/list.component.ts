import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  public heroesNames:string[] = ['Superman', 'Batman', 'Spiderman', 'Iron Man']
  public deletedHeroe?:string;
  public removeLastHero(){
    this.deletedHeroe = this.heroesNames.pop();
  }
}
