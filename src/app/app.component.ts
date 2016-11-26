import {Component, OnInit} from '@angular/core';
import {PostItService} from "./app.service";
import {PostIt} from "./PostIt";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [PostItService]
})

export class AppComponent implements OnInit {

    title = 'Dashbeard Web';
    postIts: PostIt[] = [];
    mode = 'Observable';
    errorMessage: string;

    constructor (private postItService: PostItService) {
    }

    ngOnInit() {
        this.getPosts();
    }

    getPosts() {
        this.postItService.getPosts()
            .subscribe(
                postIts => this.postIts = postIts,
                error =>  this.errorMessage = <any>error);
    }

    onDrag(event: MouseEvent) {
        console.log(event);
    }

}