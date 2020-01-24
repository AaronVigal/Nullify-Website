import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		progress() {
			this.get('progress')();
		}
	}
});
