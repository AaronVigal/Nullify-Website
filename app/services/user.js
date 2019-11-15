import Service from '@ember/service';
import { inject as service } from '@ember/service';

export default Service.extend({
	session: service(),
	firebaseApp: service(),
	store: service('store'),
	router: service(),

	// Field Data
	email: '',
	password: '',
	errorMessage: '',

	// Stored Data
	user: null,

	init() {
		this._super(...arguments);

		const service = this;

		// Reset field data
		service.set('errorMessage', null);
		service.set('email', null);
		service.set('password', null);
	},

	async login() {

		const service = this;

		var email = this.get('email');
		var password = this.get('password');
		const auth = await this.get('firebaseApp').auth();

		auth.signInWithEmailAndPassword(email, password).catch((error) => {
			service.set('errorMessage', error.message);
		}).then(() => {
			service.get('router').transitionTo('admin.index');
		});

	},

	logout() {
		this.get('session').invalidate();
	},
});
