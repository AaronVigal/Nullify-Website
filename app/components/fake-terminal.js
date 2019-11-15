import Component from '@ember/component';
import { A } from '@ember/array';
export default Component.extend({
	commandOne: A(['whoami']),
	commandTwo: A(['ls -a']),
	commandThree: A(['cat .announcements.txt']),

	delayOne: 2500,
	delayTwo: 6000,
	delayThree: 9000,

	promptTwoHidden: true,
	promptThreeHidden: true,
	
	responseOneHidden: true,
	responseTwoHidden: true,
	responseThreeHidden: true,

	promptOneShowCursor: true,
	promptTwoShowCursor: false,
	promptThreeShowCursor: false,

	typeSpeed: 40,
	loop: false,

	actions: {
		// TODO: Fix this function
		skip(){
			this.set('responseOneHidden', false);
			this.set('promptTwoHidden', false);
			this.set('responseTwoHidden', false);
			this.set('promptThreeHidden', false);
			this.set('responseThreeHidden', false);

			this.set('promptOneShowCursor', false);
			this.set('promptTwoShowCursor', false);
			this.set('promptThreeShowCursor', true);
		},
		callbackOne() {
			let controller = this;

			setTimeout(function () {
				// Add output of whoami command
				controller.set('responseOneHidden', false);

				setTimeout(function () {
					// Reveal terminal prompt 2
					controller.set('promptTwoHidden', false);
				}, 200);

			}, 300);

			// Hide promptOne cursor and show promptTwo cursor
			controller.set('promptOneShowCursor', false);
			controller.set('promptTwoShowCursor', true);
		},
		callbackTwo() {
			let controller = this;


			setTimeout(function () {
				// Add output of ls -a command
				controller.set('responseTwoHidden', false);

				setTimeout(function () {
					// Reveal terminal prompt 3
					controller.set('promptThreeHidden', false);
				}, 200);

			}, 300);

			// Hide promptTwo cursor and show promptThree cursor
			controller.set('promptTwoShowCursor', false);
			controller.set('promptThreeShowCursor', true);
		},
		callbackThree() {
			let controller = this;

			setTimeout(function () {
				// Add output of cat command
				controller.set('responseThreeHidden', false);
			}, 400);
		},

	}

}).reopenClass({
	positionalParams: ['announcement']
});
