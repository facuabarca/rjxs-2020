import { fromEvent } from 'rxjs';
import { map, takeWhile, last, tap, takeLast, skip, reduce, scan } from 'rxjs/operators';
import { displayLog } from './utils';

export default () => {
	/** start coding */
	const grid = document.getElementById('grid');

	const click$ = fromEvent(grid, 'click').pipe(

		map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
		// first(val => val[0] > 3)

		// take(4)

		takeWhile(([col, row]) => col > 3),
		// tap(data => console.log(`valid in takeWhile: [${data}]`)),
		tap(data => console.log(`celda: [${data}]`)),
		// reduce((accumulated, current) => {
		// 	return {
		// 		clicks: accumulated.clicks + 1,
		// 		cells: [... accumulated.cells, current]
		// 	}
		// }, {clicks: 0, cells: []})
		scan((accumulated, current) => {
			return {
				clicks: accumulated.clicks + 1,
				cells: [...accumulated.cells, current]
			}
		}, { clicks: 0, cells: [] })
	)

	const subscription = click$.subscribe(data => displayLog(`${data.clicks} clicks: ${JSON.stringify(data.cells)}`));

	/** end coding */
}