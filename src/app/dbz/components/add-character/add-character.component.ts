import { Character } from './../../intercafes/character.interface';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: '     dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {

  @Output()
  public onNewCharacter:EventEmitter<Character> = new EventEmitter();

  public character:Character ={
    id:'98',
    name:'nada',
    power:1
  }

    emitirCharacter():void{
      console.log(this.character);
      if(this.character.name.length === 0) return;
      debugger;
      this.onNewCharacter.emit(this.character);

      //this.character.name = '';
      //this.character.power = 0 ;
    }
}
