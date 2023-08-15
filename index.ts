import {
  concat,
  from,
  of as observableOf,
  ReplaySubject,
  Observable,
  Subject,
  interval,
  EMPTY,
  timer,
  combineLatest,
  BehaviorSubject,
  forkJoin,
  of,
  range,
} from 'rxjs';
import {
  catchError,
  concatMap,
  count,
  debounceTime,
  delay,
  finalize,
  map,
  mapTo,
  mergeMap,
  startWith,
  switchMap,
  tap,
  take,
  toArray,
  first,
  takeUntil,
  bufferTime,
  filter,
  bufferWhen,
} from 'rxjs/operators';
import './pipeableOperators';

const observer = {
  next: (val) => console.log('next', val),
  errror: (err) => console.log('err', err),
  complete: () => console.log('complete!'),
};
//create observable using static values using 'of'
const sourceOf$ = of(1, 2, 3, 4, 5);
sourceOf$.subscribe(observer);

//create observable using static values using 'range'
const sourceRange$ = range(1, 5);
sourceRange$.subscribe(observer);

//create observable using static values using 'from'
//from is more intelligent than of. It smartly gives the value that makes sense
const sourceFrom$ = from([1, 2, 3, 4, 5]);
sourceFrom$.subscribe(observer);
