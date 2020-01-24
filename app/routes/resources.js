import Route from '@ember/routing/route';
import RealtimeRouteMixin from 'emberfire/mixins/realtime-route';
import PerformanceRouteMixin from 'emberfire/mixins/performance-route';
import RSVP from 'rsvp';

export default Route.extend(RealtimeRouteMixin, PerformanceRouteMixin, {
	model() {
		return this.store.findAll('resource', { include: 'tags' }).then((res) => {
			// console.log(res)
			// console.log(res.get('firstObject'))
			return RSVP.hash({
				resources: res,
				tags: this.store.findAll('tag')
			});
		})
		
	}
});