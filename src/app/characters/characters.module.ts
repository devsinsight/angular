import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CharactersRouting, routableComponents } from './characters.routing'
import { CharactersService } from './shared/characters.service';

@NgModule({
  imports: [
    CommonModule,
    NgbModule,
    CharactersRouting
  ],
  declarations: [routableComponents],
  providers:[CharactersService]
})
export class CharactersModule { }