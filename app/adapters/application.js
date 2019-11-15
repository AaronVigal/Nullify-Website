import FirestoreAdapter from 'emberfire/adapters/firestore';
import { inject as service } from '@ember/service';

export default FirestoreAdapter.extend({
    // Uncomment the following lines to enable offline persistence and multi-tab support
    enablePersistence: true,
	persistenceSettings: { synchronizeTabs: true },
	firebase: service()
});