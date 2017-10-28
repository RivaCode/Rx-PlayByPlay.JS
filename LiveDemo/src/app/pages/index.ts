import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";

import {PagesRoutesModule} from "./pages-routes.module";

import {NavigationComponent} from "./navigation/navigation.component";
import {GooglesearchComponent} from "./googlesearch/googlesearch.component";
import {FlyingtextComponent} from "./flyingtext/flyingtext.component";

const COMPONENTS = [
  GooglesearchComponent,
  FlyingtextComponent,
  NavigationComponent
];

@NgModule({
  imports: [CommonModule, RouterModule, PagesRoutesModule],
  exports: COMPONENTS,
  declarations: COMPONENTS
})
export class PagesModule {}
