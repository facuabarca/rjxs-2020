import { displayLog } from './utils';
import { Observable } from 'rxjs';

export default () => {
	const hello = Observable.create((observer) => {
		observer.next("Hello");
		setTimeout(() => {
			observer.next("World");
			observer.complete();
		}, 2000);
	});

	const observer = {
		next: evt => displayLog(evt),
		error: err => console.error('[ERR]', err),
		complete: () => displayLog('[DONE]')
	};
	const subscription = hello.subscribe(observer);
	const subscription2 = hello.subscribe(observer);
	subscription.unsubscribe();
}