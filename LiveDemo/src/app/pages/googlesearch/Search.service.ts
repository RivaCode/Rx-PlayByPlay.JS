import {Injectable} from "@angular/core";

import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";
import "rxjs/add/observable/fromPromise";

@Injectable()
export class SearchService {
  private attempts = 0;

  searchAsPromise(token: string): Promise<string[]> {
    const results = this.generateResults();
    return new Promise(resolve => setTimeout(() => resolve(results), 1000));
  }

  searchAsPromiseWithCancel(token: string, ct: CancelToken): Promise<string[]> {
    const results = this.generateResults();
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ct.cancel) {
          reject();
        } else {
          resolve(results);
        }
      }, 1000);
    });
  }

  search(token: string): Observable<string[]> {
    return Observable.fromPromise(this.searchAsPromise(token));
  }

  private generateResults(): Array<string> {
    this.attempts++;

    return [1, 2, 3, 4, 5].map(
      n => `Search result_${n} - [attemp ${this.attempts}]`
    );
  }
}

export interface CancelToken {
  cancel: boolean;
}
