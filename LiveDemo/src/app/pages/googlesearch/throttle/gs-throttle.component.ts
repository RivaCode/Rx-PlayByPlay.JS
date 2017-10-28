import {Component} from "@angular/core";

import {SearchService} from "../Search.service";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-throttle.component.html",
  styleUrls: ["./gs-throttle.component.css"],
  providers: [SearchService]
})
export class GsThrottleComponent {
  private lastSearchToken: string;
  private timeoutId: any;

  results: string[] = [];

  constructor(private searchService: SearchService) {}

  textChanged(token: string) {
    if (token.length < 3) {
      this.stopTimer();
      return;
    }

    if (this.lastSearchToken === token) {
      this.stopTimer();
      return;
    }

    this.lastSearchToken = token;
    this.restartTimer();
  }

  private restartTimer() {
    this.stopTimer();
    this.timeoutId = setTimeout(() => this.throttleElapsed(), 500);
  }

  private stopTimer() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private throttleElapsed() {
    this.searchService
      .searchAsPromise(this.lastSearchToken)
      .then(results => (this.results = results));
  }
}
