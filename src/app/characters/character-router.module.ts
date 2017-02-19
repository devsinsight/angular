import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from './characters.component';
import { CharacterComponent } from './character/character.component';
import { CharacterListComponent } from './character-list/character-list.component';

const router: Routes = [
  {
    path: 'characters', component: CharactersComponent,
    children: [
      { path: '', component: CharacterListComponent },
      { path: ':id', component: CharacterComponent }
    ]
  }
  
];



@NgModule({
  imports: [RouterModule.forChild(router)],
  exports: [RouterModule]
})
export class CharacterRouterModule { }
export const routableComponents = [CharactersComponent, CharacterComponent, CharacterListComponent]