export interface ISubscription {
  unsubscribe: () => void;
}

export interface IObserver<T> {
  next(value: T): void;
  error(err: Error): void;
  complete(): void;
}

export interface IObservable<T> {
  subscribe(observer: IObserver<T>): ISubscription;
}

export abstract class Observable<T> {
  static from<T>(values: Array<T>): Observable<T> {
    return new ArrayObservable<T>(values);
  }

  abstract subscribe(observer: IObserver<T>): ISubscription;
}

export class Observer {
  static readonly EMPTY: IObserver<any> = {
    next: (value: any) => {},
    error: (err: Error) => {},
    complete: () => {}
  };
  private constructor() {}
}

class ArrayObservable<T> extends Observable<T> {
  constructor(private values: Array<T>) {
    super();
  }

  subscribe(observer: IObserver<T>): ISubscription {
    this.values.forEach(value => observer.next(value));
    observer.complete();

    return {
      unsubscribe: (): void => {}
    };
  }
}
