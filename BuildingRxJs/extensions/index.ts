import {Observable} from "../interfaces";
import {MapObservable} from "./map";
import {FilterObservable} from "./filter";

function mapImpl<T, K>(
  this: Observable<T>,
  transformFn: (value: T) => K
): Observable<K> {
  return new MapObservable<T, K>(this, transformFn);
}

function filterImpl<T>(
  this: Observable<T>,
  predicat: (value: T) => boolean
): Observable<T> {
  return new FilterObservable(this, predicat);
}

Observable.prototype.map = mapImpl;
Observable.prototype.filter = filterImpl;

declare module "../interfaces" {
  interface Observable<T> {
    map: typeof mapImpl;
    filter: typeof filterImpl;
  }
}
