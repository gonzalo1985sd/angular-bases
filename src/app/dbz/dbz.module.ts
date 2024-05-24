import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MainPageComponents } from './pages/main-pages-components';
import { ListComponent } from './components/list/list.component';
import { AddCharacterComponent } from './components/add-character/add-character.component';




@NgModule({
  declarations: [
    MainPageComponents,
    ListComponent,
    AddCharacterComponent
  ],
  exports:[
    MainPageComponents
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
