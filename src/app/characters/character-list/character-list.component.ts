import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';
import { Observable } from 'rxjs/Observable';
export class Character {
  constructor(id: number, name: string, info: string) { }
}

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

  showSelected(character) {
    

    this.selectedCharacterName = character.name;

  }

}