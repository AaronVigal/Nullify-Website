import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	moment: service(),

	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,

	showCountdown: true,

	startCountdown() {
		let controller = this;
		let moment = controller.get('moment');
		
		let countDownDate = moment.moment('2/8/2020');
		var x = setInterval(function () {
			let diff = countDownDate.diff(moment.moment());			
			if (diff <= 0) {
				clearInterval(x);
				controller.set('showCountdown', false);
			} else {
				controller.set('days', countDownDate.diff(moment.moment(), 'days'));
				controller.set('hours', moment.moment(diff).format("HH"));
				controller.set('minutes', moment.moment(diff).format("mm"));
				controller.set('seconds', moment.moment(diff).format("ss"));
			}
		}, 1000);
	}
});
