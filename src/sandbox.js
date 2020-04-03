import { fromEvent } from 'rxjs';
import { map, takeWhile, last, tap, takeLast, skip} from 'rxjs/operators';

export default () => {
	/** start coding */
	const grid = document.getElementById('grid');

	const click$ = fromEvent(grid, 'click').pipe(

		map(val => [Math.floor(val.offsetX / 50), Math.floor(val.offsetY / 50)]),
		// first(val => val[0] > 3)

		// take(4)

		// takeWhile(([col, row]) => col > 3),
		// tap(data => console.log(`valid in takeWhile: [${data}]`)),
		tap(data => console.log(`celda: [${data}]`)),
		// last()
		// takeLast(3)
		skip(5)





	)

	const subscription = click$.subscribe(data => console.log(data));


	/** end coding */
}