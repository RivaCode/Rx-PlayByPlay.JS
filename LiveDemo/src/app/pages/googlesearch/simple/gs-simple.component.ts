import {Component} from "@angular/core";
import {SearchService} from "../Search.service";

@Component({
  selector: "googlesearch",
  templateUrl: "./gs-simple.component.html",
  styleUrls: ["./gs-simple.component.css"],
  providers: [SearchService]
})
export class GsSimpleComponent {
  private lastSearchToken: string;
  results: string[] = [];

  constructor(private searchService: SearchService) {}

  textChanged(token: string) {
    if (token.length < 3) {
      return;
    }

    if (this.lastSearchToken === token) {
      return;
    }

    this.lastSearchToken = token;
    this.searchService
      .searchAsPromise(this.lastSearchToken)
      .then(results => (this.results = results));
  }
}
