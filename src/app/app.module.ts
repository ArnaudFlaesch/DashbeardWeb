import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {PostItComponent} from "./app.postItComponent";
import {PostIt} from "./PostIt";

@NgModule({
  declarations: [AppComponent, PostItComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [PostIt],
  bootstrap: [AppComponent]
})

export class AppModule { }