import {Observable, ISubscription, IObserver, Observer} from "../interfaces";

export class MapObservable<T, K> extends Observable<K> implements IObserver<T> {
  private observer: IObserver<K>;

  constructor(
    private src: Observable<T>,
    private transformFn: (value: T) => K
  ) {
    super();
  }

  subscribe(observer: IObserver<K>): ISubscription {
    this.observer = observer;
    const subscription = this.src.subscribe(this);

    return {
      unsubscribe: () => {
        subscription.unsubscribe();
        this.observer = Observer.EMPTY; // we want to release the previous "operator" which was passed as an IObserver
      }
    };
  }

  next(value: T): void {
    this.observer.next(this.transformFn(value));
  }

  error(err: Error): void {}
  complete(): void {}
}
