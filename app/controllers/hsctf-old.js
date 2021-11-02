import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	moment: service(),

	days: 0,
	hours: 0,
	minutes: 0,
	seconds: 0,

	showCountdownOne: true,
	showCountdownTwo: false,


	startCountdown() {
		let controller = this;
		let moment = controller.get('moment');
		// Day month year
		let countDownDate = moment.moment('2020-02-08 14:00:00');
		var x = setInterval(function () {
			let diff = countDownDate.diff(moment.moment());			
			if (diff <= 0) {
				clearInterval(x);
				controller.set('showCountdownOne', false);
				controller.set('showCountdownTwo', true);

				// Moment is 6 hours behind
				let countDownDateTwo = moment.moment('2020-02-08 16:00:00');
				// let countDownDateTwo = countDownDate.clone().add(6, 'hour'); 
				let diff2 = countDownDateTwo.diff(moment.moment());	
				if (diff <= 0) {
					clearInterval(x);
					controller.set('showCountdownTwo', false);
				} else {				
					controller.set('days', countDownDateTwo.diff(moment.moment(), 'days'));
					controller.set('hours', moment.moment(diff2).format("HH"));
					controller.set('minutes', moment.moment(diff2).format("mm"));
					controller.set('seconds', moment.moment(diff2).format("ss"));
				}
			} else {
				controller.set('days', countDownDate.diff(moment.moment(), 'days'));
				controller.set('hours', moment.moment(diff).format("HH"));
				controller.set('minutes', moment.moment(diff).format("mm"));
				controller.set('seconds', moment.moment(diff).format("ss"));
			}
		}, 1000);
	}
});
