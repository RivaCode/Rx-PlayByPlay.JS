import {Observable} from "rxjs/Observable";
import {Component, ElementRef, ViewChild, OnInit, AfterContentInit} from "@angular/core";

import "rxjs/add/observable/from";
import "rxjs/add/operator/skipUntil";
import "rxjs/add/operator/takeUntil";
import "rxjs/add/operator/take";
import "rxjs/add/operator/delay";
import "rxjs/add/operator/repeat";
import "rxjs/add/operator/mergeMap";

@Component({
  selector: "flyingtext",
  templateUrl: "./flyingtext.component.html",
  styleUrls: ["./flyingtext.component.css"]
})
export class FlyingtextComponent implements OnInit, AfterContentInit {
  @ViewChild("container") el: ElementRef;
  characters: Char[];

  private get characters$(): Observable<Char> {
    return Observable.from(this.characters);
  }

  constructor() {}

  ngOnInit() {
    this.characters = "Rx can make text fly".split("").map(c => new Char(c));
  }

  ngAfterContentInit(): void {
    const down$ = Observable.fromEvent<MouseEvent>(this.el.nativeElement, "mousedown");
    const move$ = Observable.fromEvent<MouseEvent>(this.el.nativeElement, "mousemove");
    const up$ = Observable.fromEvent<MouseEvent>(this.el.nativeElement, "mouseup");

    down$.take(1).subscribe(_ => this.characters.forEach(c => (c.isAbsolute = true)));

    const drag$ = move$
      .skipUntil(down$)
      .takeUntil(up$)
      .repeat();

    const point$ = drag$.map(me => ({x: me.clientX, y: me.clientY}));
    this.flyTheText(point$);
  }

  private flyTheText(point$: Observable<{x: number; y: number}>): void {
    point$
      .flatMap(point =>
        this.characters$.flatMap((char, index) =>
          Observable.of({char, index, point}).delay(index * 75)
        )
      )
      .subscribe(args => {
        const {char, point, index} = args;

        char.left = point.x + index * 10 + 15;
        char.top = point.y;
      });
  }
}

class Char {
  isAbsolute = false;
  top: number;
  left: number;

  get char(): string {
    return this._char;
  }

  constructor(private _char: string) {}
}
