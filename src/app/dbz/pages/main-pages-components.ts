import { DbzService } from './../services/dbz.service';
import { Component, OnInit, Output } from '@angular/core';
import { Character } from '../intercafes/character.interface';

@Component({
  selector: 'app-db-main-page',
  templateUrl: './main-pages-componenets.html'
})

export class MainPageComponents implements OnInit {


  constructor(private dbzService:DbzService){
  }
  ngOnInit() { }

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  public onDeleteCharacter(id:string):void{
    this.dbzService.deleteCharacterById(id);
  }

  public onNewCharacter(character: Character){
    this.dbzService.addCharacter(character);
  }

}
