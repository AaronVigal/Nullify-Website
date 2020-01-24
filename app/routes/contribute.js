import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';
import PerformanceRouteMixin from 'emberfire/mixins/performance-route';
import RSVP from 'rsvp';

export default Route.extend(RealtimeRouteMixin, PerformanceRouteMixin, {
	model() {
		return RSVP.hash({
			new: this.store.createRecord('suggestedresource', {
				name: '',
				url: '',
			}),
			progress: 0
		});
	}
});