import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
	router: service(),
	user: service(),
	init() {
		this._super(...arguments);
		window.addEventListener('beforeinstallprompt', (e) => {
			// Stash the event so it can be triggered later.
			let deferredPrompt = e;
			setTimeout(function () {
				deferredPrompt.prompt();
			}, 10000);
			// deferredPrompt.userChoice.then((choiceResult) => {
			// 	if (choiceResult.outcome === 'accepted') {
			// 		console.log('User accepted the A2HS prompt');
			// 	} else {
			// 		console.log('User dismissed the A2HS prompt');
			// 	}
			// 	deferredPrompt = null;
			// });
		});
	},
	isResourcesRoute: Ember.computed.equal('router.currentRouteName', 'resources')
});