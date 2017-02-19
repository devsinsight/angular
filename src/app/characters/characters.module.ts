import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharacterRouterModule, routableComponents } from './character-router.module'
import { CharactersService } from './characters.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CharacterRouterModule
  ],
  declarations: [routableComponents],
  providers:[CharactersService]
})
export class CharactersModule { }