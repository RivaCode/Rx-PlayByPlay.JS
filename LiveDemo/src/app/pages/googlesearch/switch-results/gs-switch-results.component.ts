import {Component} from "@angular/core";
import {SearchService, CancelToken} from "../Search.service";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-switch-results.component.html",
  styleUrls: ["./gs-switch-results.component.css"],
  providers: [SearchService]
})
export class GsSwitchResultsComponent {
  private lastSearchToken: string;
  private timeoutId: any;
  private ct: CancelToken;

  results: string[] = [];

  constructor(private searchService: SearchService) {
    this.ct = {cancel: false};
  }

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
    this.ct.cancel = true;
    this.ct = {cancel: false};

    this.searchService
      .searchAsPromiseWithCancel(this.lastSearchToken, this.ct)
      .then(results => (this.results = results))
      .catch(_ => {});
  }
}
