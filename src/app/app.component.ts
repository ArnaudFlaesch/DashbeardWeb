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
	
	createPostIt(): void {
        this.postItService.addNewPostIt(new PostIt())
            .subscribe(
                postIt  => this.postIts.push(postIt),
                error =>  this.errorMessage = <any>error);
    }

	updatePostIt(postIt: PostIt): void {
        console.log("Update in Component");
        console.log(postIt);
        this.postItService.update(postIt);
    }


     deletePostIt(idPostIt: number): void {
         console.log("Delete in Component");
         /*
         this.postItService
             .delete(idPostIt)
             .subscribe(
                 this.postIts = this.postIts.filter(post => post.idPostIt !== idPostIt),
                 error =>  this.errorMessage = <any>error);
             }
         */
     }

	
    onDrag(event: MouseEvent) {
        console.log(event);
    }
}