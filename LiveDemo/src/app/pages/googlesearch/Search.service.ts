import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class SearchService {
  constructor() {}

  search(token: string): Observable<string[]> {
    return Observable.of(["a", "b"].concat(token));
  }
}
