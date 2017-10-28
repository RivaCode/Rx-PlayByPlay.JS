import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {RouterModule} from "@angular/router";

import {PagesModule} from "./pages/pages.module";

import {AppComponent} from "./app.component";

@NgModule({
  imports: [BrowserModule, PagesModule, RouterModule.forRoot([])],
  exports: [AppComponent],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
