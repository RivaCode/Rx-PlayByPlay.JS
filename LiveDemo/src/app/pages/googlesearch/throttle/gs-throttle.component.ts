import {Component, AfterContentInit} from "@angular/core";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-throttle.component.html",
  styleUrls: ["./gs-throttle.component.css"]
})
export class GsThrottleComponent implements AfterContentInit {
  results: string[] = [];

  constructor() {}

  ngAfterContentInit(): void {}
}
