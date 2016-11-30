import { Injectable }     from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import {PostIt} from "./PostIt";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';

@Injectable()
export class PostItService {
    constructor(private http: Http) { }

    private API_URL = 'https://dashbeardapi.herokuapp.com/postit/';
    private headers = new Headers({'Content-Type': 'application/json'});

    getPosts(): Observable<PostIt[]> {
        return this.http.get(this.API_URL).map(this.extractData)
    }
	
    private extractData(res: Response) {
        let body = res.json();
        return body || { };
    }

	addNewPostIt(postIt : PostIt): Observable<PostIt> {
        console.log(postIt);
        console.log(this.http.post(this.API_URL, postIt, {headers : this.headers}).map(this.extractData));
		return this.http.post(this.API_URL, postIt, {headers : this.headers}).map(this.extractData);
	}
	
	update(postIt: PostIt): Observable<PostIt> {
		const url = `${this.API_URL}/${postIt.idPostIt}`;
        return this.http.put(url, JSON.stringify({content: postIt.content}), {headers : this.headers})
            .map(this.extractData);
	}

	delete(idPostIt: number): Observable<void> {
		const url = `${this.API_URL}/${idPostIt}`;
		return this.http.delete(url)
            .map(this.extractData);
	}
}