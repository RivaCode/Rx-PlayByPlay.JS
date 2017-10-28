import {Component, AfterContentInit} from "@angular/core";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-switch-results.component.html",
  styleUrls: ["./gs-switch-results.component.css"]
})
export class GsSwitchResultsComponent implements AfterContentInit {
  results: string[] = [];

  constructor() {}

  ngAfterContentInit(): void {}
}
