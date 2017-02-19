import { Injectable } from '@angular/core';
import { Http, Response, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CommonService {

    constructor(private http: Http) { }

    get(url: string, params?: RequestOptionsArgs) {
        return this.http
            .get(url,params )
            .map((response: Response) => response.json())
            .catch(this.handleError);
    }

    private handleError(error: Response){
        let msg = `Status Code is {error.status} on url {error.url}`;
        console.error(msg);
        return Observable.throw(msg)

    }

}