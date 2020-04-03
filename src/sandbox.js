import { fromEvent} from 'rxjs';
import { mapTo, map, filter} from 'rxjs/operators';

export default () => {
    /** start coding */
	const grid = document.getElementById('grid');
	
	const click$ = fromEvent(grid, 'click').pipe(
		// mapTo('click')
		map(val => [Math.floor( val.offsetX / 50), Math.floor(val.offsetY / 50)]),
		filter(val => (val[0] + val[1]) % 2 != 0 )
	)

	const subscription = click$.subscribe(data => console.log(data));


    /** end coding */
}