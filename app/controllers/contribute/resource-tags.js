import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		async progress() {
			// console.log('1');
			this.get('progress')();
		},
		digress() {
			// console.log('1');
			this.get('progress')();
		}
	}
});
