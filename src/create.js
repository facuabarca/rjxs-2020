import { displayLog } from './utils';
import { of, range } from 'rxjs';

export default () => {

	const source = of(1, 2, 3, 4, 5, 6);

	const source2 = of(
		[1, 2, 3],
		'Hello World',
		{ foo: "bar" },
		function sayHello() { return 'hi' }
	);

	const source3 = range(3,10);

	const subscription = source3.subscribe(data => displayLog(data));

}