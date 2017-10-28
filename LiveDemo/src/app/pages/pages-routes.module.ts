import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {GooglesearchComponent} from "./googlesearch/googlesearch.component";
import {FlyingtextComponent} from "./flyingtext/flyingtext.component";

const routes: Routes = [
  {path: "googlesearch", component: GooglesearchComponent},
  {path: "fly-text", component: FlyingtextComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
})
export class PagesRoutesModule {}