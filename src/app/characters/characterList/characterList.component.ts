import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-character-list',
  templateUrl: './characterList.component.html',
  styleUrls: ['./characterList.component.css']
})
export class CharacterListComponent implements OnInit {
 characters: Array<any> = [
    {id:1, name:'Son Goku', info:''},
    {id:2, name:'Son Gohan', info:''}
  ]

  constructor() { }

  ngOnInit() {
  }

}