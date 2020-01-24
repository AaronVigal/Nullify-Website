import FirestoreAdapter from 'emberfire/adapters/firestore';
import { inject as service } from '@ember/service';

export default FirestoreAdapter.extend({
    enablePersistence: true,
	persistenceSettings: { synchronizeTabs: true },
	firebase: service()
});