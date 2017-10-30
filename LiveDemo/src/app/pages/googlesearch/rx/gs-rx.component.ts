import {Component, AfterContentInit, ViewChild, ElementRef} from "@angular/core";

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switch";

import {SearchService} from "../Search.service";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-rx.component.html",
  styleUrls: ["./gs-rx.component.css"],
  providers: [SearchService]
})
export class GsRxComponent implements AfterContentInit {
  results: string[] = [];
  @ViewChild("text") txb: ElementRef;

  constructor(private searchService: SearchService) {}

  ngAfterContentInit(): void {}
}
