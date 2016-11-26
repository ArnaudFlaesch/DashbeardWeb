import {Component, ElementRef} from '@angular/core';
import {PostIt} from "./PostIt";

declare var jQuery:any;

@Component({
    selector: 'post-it',
    templateUrl: './postIt.component.html',
    styleUrls: ['./app.component.css'],
})

export class PostItComponent {
    postIt : PostIt;
    elementRef: ElementRef;

    constructor (postIt: PostIt, elementRef: ElementRef) {
        this.elementRef = elementRef;
        this.postIt = postIt;

        jQuery(this.elementRef.nativeElement).draggable({  });
    }
}