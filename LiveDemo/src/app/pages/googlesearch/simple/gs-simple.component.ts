import {Component, AfterContentInit} from "@angular/core";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-simple.component.html",
  styleUrls: ["./gs-simple.component.css"]
})
export class GsSimpleComponent implements AfterContentInit {
  results: string[] = [];

  constructor() {}

  ngAfterContentInit(): void {}
}
