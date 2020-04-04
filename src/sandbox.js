import { fromEvent } from 'rxjs';
import { map, takeWhile, tap, startWith, endWith } from 'rxjs/operators';
import { displayLog } from './utils';

export default () => {
	/** start coding */
	const grid = document.getElementById('grid');

	const click$ = fromEvent(grid, 'click').pipe(

		map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
		takeWhile(([col, row]) => col > 3),
		tap(data => console.log(`celda: [${data}]`)),
		startWith('Grid: Dimensions', '10x10'),
		endWith('game finished', 'bye!')

	)

	const subscription = click$.subscribe(data => displayLog(`${JSON.stringify(data)}`));

	/** end coding */
}