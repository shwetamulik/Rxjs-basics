import { fromEvent } from 'rxjs';
import { map, pluck } from 'rxjs/operators';

//observable having event stream-here let's keep it as a parent source
const keyUp$ = fromEvent(document, 'keyup').pipe(map((event) => event));

//observable using map operator to get the event-codes from the parent source
const keyUpCode$ = keyUp$
  .pipe(map((event) => event.code))
  .subscribe(console.log);

//observable using pluck operator to get the event-codes from the parent source
const keyUpCodeUsingPluck$ = keyUp$.pipe(pluck('code')).subscribe(console.log);
