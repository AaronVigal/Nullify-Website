import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	user: service(),

	passwordHidden: true,
	passwordHiddenValue: 'password',

	actions: {
		async login() {
			await this.get('user').login();
		},

		togglePasswordHidden() {
			if (this.get('passwordHidden')) {
				this.set('passwordHidden', false);
				this.set('passwordHiddenValue', 'text');
			} else {
				this.set('passwordHidden', true);
				this.set('passwordHiddenValue', 'password');
			}
		}

	}
});
