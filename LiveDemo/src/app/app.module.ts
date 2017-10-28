import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {PagesModule} from "./pages";

import {AppComponent} from "./app.component";

@NgModule({
  imports: [BrowserModule, PagesModule, RouterModule.forRoot([])],
  exports: [AppComponent],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
