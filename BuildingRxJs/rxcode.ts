import "./extensions";
import {IObserver, ISubscription, Observable} from "./interfaces";

function main() {
  const observer = {
    next: (value: number): void => {
      console.log(value);
    },
    error: (err: Error): void => {
      console.error(err);
    },
    complete: (): void => {
      console.log("done");
    }
  };

  const subscription = Observable.from([10, 20, 30])
    .filter(n => n > 10)
    .map(n => n * 10)
    .subscribe(observer);
}

main();
