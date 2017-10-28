import {
  Component,
  AfterContentInit,
  ViewChild,
  ElementRef
} from "@angular/core";

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/map";
import "rxjs/add/operator/filter";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

@Component({
  selector: "app-googlesearch",
  templateUrl: "./googlesearch.component.html",
  styleUrls: ["./googlesearch.component.css"]
})
export class GooglesearchComponent implements AfterContentInit {
  results: string[] = [];
  @ViewChild("text") txb: ElementRef;

  constructor() {}

  ngAfterContentInit(): void {
    Observable.fromEvent(this.txb.nativeElement, "keyup")
      .map(_ => <string>this.txb.nativeElement.value)
      .filter(candidate => candidate.length > 2)
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap(token => Promise.resolve(["a", "b"].concat(token)))
      .subscribe(results => (this.results = results));
  }
}
