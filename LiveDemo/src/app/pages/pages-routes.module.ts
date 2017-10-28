import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {FlyingtextComponent} from "./flyingtext/flyingtext.component";
import {
  GsSimpleComponent,
  GsThrottleComponent,
  GsSwitchResultsComponent,
  GsRxComponent
} from "./googlesearch";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "googlesearch/simple"
  },
  {path: "googlesearch/simple", component: GsSimpleComponent},
  {path: "googlesearch/throttle", component: GsThrottleComponent},
  {path: "googlesearch/switch-results", component: GsSwitchResultsComponent},
  {path: "googlesearch/rx", component: GsRxComponent},
  {path: "fly-text", component: FlyingtextComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)]
})
export class PagesRoutesModule {}
