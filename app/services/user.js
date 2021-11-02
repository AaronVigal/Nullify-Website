import Service from '@ember/service';
import { inject as service } from '@ember/service';
import firebase from 'firebase/app';

export default Service.extend({
	session: service(),
	firebaseApp: service(),
	store: service(),
	admin: false,

	async login() {
		const auth = await this.get('firebaseApp').auth();
		const provider = new firebase.auth.GoogleAuthProvider();
		return auth.signInWithPopup(provider).then((user) => {
			this.store.findRecord('officer', user.user.uid)
			.then(() => {
				this.set('admin', true);
			}).catch(() => {
				// Not admin
				console.log("Successfully Signed In")
			});
		})
	},

	logout() {
		this.set('admin', false);
		return this.get('session').invalidate();
	},

	// TODO: This might be causing the logo to not show up
	init() {
		this._super();
		if(this.get('session').isAuthenticated){
			this.store.findRecord('officer', this.get('session').data.authenticated.user.uid)
			.then(() => {
				this.set('admin', true);
			}).catch(() => {});
		}
	}
});
