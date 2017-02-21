import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../shared/characters.service';
import { Observable } from 'rxjs/Observable';
import { Character } from '../shared/character.model';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {

  characters: Observable<Character[]>;
  selectedCharacterName: string;

  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.characters = this.charactersService.getCharacters();
  }

  showSelected(animeName:string) {
    this.selectedCharacterName = animeName;
  }

}