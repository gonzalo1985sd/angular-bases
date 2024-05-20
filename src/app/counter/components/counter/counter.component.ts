import { Component } from '@angular/core';



@Component({
  selector:'app-counter',
  template:`
          <h3>Counter : {{counte}}</h3>
          <button (click)="increaseBy(+1)">+1</button>
          <button (click)="increaseBy(-1)">-1</button>
          <button (click)="reset()">Reset</button>
          `
})
export class CounterComponent{

  public counte:number = 10;

  public increaseBy(value:number):void{
    this.counte += value;
  }
  public reset():void{
    this.counte = 10;
  }
}
