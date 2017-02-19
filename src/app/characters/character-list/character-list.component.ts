import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css']
})
export class CharacterListComponent implements OnInit {
  characters: Array<any> = []
  constructor(private charactersService: CharactersService) { }

  ngOnInit() {
    this.charactersService
      .getCharacters()
      .subscribe(characters => this.characters = characters);

  }

}