import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './CharacterList/CharacterList.component';
import { CharacterListComponent } from './characterList/characterList.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CharactersComponent,
    CharacterComponent,
    CharacterListComponent,
    CharacterListComponent
]
})
export class CharactersModule { }