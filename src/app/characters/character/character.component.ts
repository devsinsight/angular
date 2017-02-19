import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {
  private id: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router

  ) { }

  ngOnInit() {
    
      this.route.params.forEach(param => this.getCharacter(param['id']));
      
  }

  getCharacter(id:number) {
    //call the service and pass the id as parameter
    this.id = id;
  }
}