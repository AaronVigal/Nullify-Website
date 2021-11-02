import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	session: service(),
	user: service(),
	actions: {
		async login() {
			await this.get('user').login();
		},
		logout() {
			this.get('user').logout();
			this.get('router').transitionTo('index');
		},
	}
});