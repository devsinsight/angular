import { Injectable } from '@angular/core';
import { CommonService } from '../../core/services/common.service';

@Injectable()
export class CharactersService {

    constructor(private service: CommonService) { }

    getCharacters() {
        return this.service.get("http://localhost:8080/api/character/getCharacters");
    }

    getCharacterById(id:number){
        
        

    }
}