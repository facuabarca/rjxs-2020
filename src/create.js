import { displayLog } from './utils';
import { fromEvent} from 'rxjs';

export default () => {
	const actionBtn = document.getElementById('action-btn');
	
	const source = fromEvent(actionBtn, 'click');

	const subscription = source.subscribe(evt => displayLog(`${evt.x}, ${evt.y}`));

	fromEvent(document, 'mousemove').subscribe(evt => {
		console.log(evt);
	});

	

}