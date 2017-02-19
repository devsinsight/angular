import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CharactersComponent } from '../characters/characters.component';
import { CharacterListComponent } from '../characters/characterList/characterList.component';
import { CharacterComponent } from '../characters/character/character.component';
import { HomeComponent } from '../home/home.component';

const router: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'characters', component: CharactersComponent,
    children: [
      { path: '', component: CharacterListComponent },
      { path: ':id', component: CharacterComponent }
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(router)
  ],
  exports: [RouterModule]
})
export class AppRouterModule { }
export const routableComponents = [HomeComponent, CharactersComponent, CharacterListComponent, CharacterComponent]
