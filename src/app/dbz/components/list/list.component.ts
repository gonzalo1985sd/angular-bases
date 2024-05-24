import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../intercafes/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
public deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    id:'99',
    name: 'Trunk',
    power: 1,
  }];

  public onDeleteCharacter(id: string): void {
    console.log('onDeleteCharacter:');
    this.deleteCharacter.emit(id);
  }
}
