import { Injectable } from '@angular/core';
import { Character } from '../intercafes/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] =[
    {
      id: uuid(),
      name: 'Krillin',
      power:1000
    },{
      id: uuid(),
      name: 'Goku',
      power:9500
    },
    {
      id: uuid(),
      name: 'vegeta',
      power: 8000
    }
  ];

  constructor(  ) { }

public addCharacter(character: Character):void{
    console.log('main');
    console.log(character);

    const  newCharacter:Character = {...character, id:uuid()};
    this.characters.push(newCharacter);

}
public onDeleteCharacter(index: number): void {
  console.log('main');
  console.log(index);
  this.characters.splice(index, 1);
}
public deleteCharacterById(id: string): void {
  console.log('deleteCharacterById:', id);
  this.characters = this.characters.filter(character => character.id!== id);
}
}
