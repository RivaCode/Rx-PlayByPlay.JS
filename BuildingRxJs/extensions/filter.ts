import {Observable, ISubscription, IObserver, Observer} from "../interfaces";

export class FilterObservable<T> extends Observable<T> implements IObserver<T> {
  private observer: IObserver<T>;

  constructor(
    private src: Observable<T>,
    private predicat: (value: T) => boolean
  ) {
    super();
  }

  subscribe(observer: IObserver<T>): ISubscription {
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
    if (this.predicat(value)) this.observer.next(value);
  }

  error(err: Error): void {}
  complete(): void {}
}
