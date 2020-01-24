import Component from '@ember/component';
import { A } from '@ember/array';
export default Component.extend({

	strings: ['^1000 whoami\n `We are NULLify, a hard working club...` ^1000 ls -la\n `Output of ls...` ^1000 cat .announcements.txt\n `This is where the announcement goes...`'],


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

	promptOneShowCursor: false,
	promptTwoShowCursor: false,
	promptThreeShowCursor: false,

	typeSpeed: 40,
	loop: false,

	actions: {
		completed() {

		},



		// TODO: Fix this function
		skip() {
			this.set('responseOneHidden', false);
			this.set('promptTwoHidden', false);
			this.set('responseTwoHidden', false);
			this.set('promptThreeHidden', false);
			this.set('responseThreeHidden', false);

			this.set('promptOneShowCursor', false);
			this.set('promptTwoShowCursor', false);
			this.set('promptThreeShowCursor', true);
		},
		// Also if you're reading this for some reason I'm sorry about
		// all the try...catch's... it's just really annoying in the console with
		// all the "can't set property on destroyed object" warnings
		callbackOne() {
			let controller = this;

			setTimeout(function () {
				// Add output of whoami command
				try {
					controller.set('responseOneHidden', false);
				} catch (error) {}	

				setTimeout(function () {
					// Reveal terminal prompt 2
					try{
						controller.set('promptTwoHidden', false);
					} catch (error) {}
				}, 200);

			}, 300);

			// Hide promptOne cursor and show promptTwo cursor
			try{
				controller.set('promptOneShowCursor', false);
			} catch (error) {}
			try{
				controller.set('promptTwoShowCursor', true);
			} catch (error) {}
		},
		callbackTwo() {
			let controller = this;


			setTimeout(function () {
				// Add output of ls -a command
				try{
					controller.set('responseTwoHidden', false);
				} catch (error) {}

				setTimeout(function () {
					// Reveal terminal prompt 3
					try{
						controller.set('promptThreeHidden', false);
					} catch (error) {}
				}, 200);

			}, 300);

			// Hide promptTwo cursor and show promptThree cursor
			try{
				controller.set('promptTwoShowCursor', false);
			} catch (error) {}
			try{
				controller.set('promptThreeShowCursor', true);
			} catch (error) {}
		},
		callbackThree() {
			let controller = this;

			setTimeout(function () {
				// Add output of cat command
				try{
					controller.set('responseThreeHidden', false);
				} catch (error) {}
			}, 400);
		},

	}

}).reopenClass({
	positionalParams: ['announcement']
});
