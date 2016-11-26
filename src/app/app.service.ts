import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import {PostIt} from "./PostIt";
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class PostItService {
    constructor(private http: Http) { }

    private API_URL = 'http://dashbeardapi.herokuapp.com/postit/';

    getPosts (): Observable<PostIt[]> {
        return this.http.get(this.API_URL)
            .map(this.extractData)
    }
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }
}