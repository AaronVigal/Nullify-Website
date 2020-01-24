import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import RSVP from 'rsvp';
import $ from 'jquery';

export default Route.extend({
	ajax: service(),
	model() {
		return this.store.findRecord('calendar', 'qw8iinzlYK8CQgnyUNLz').then((settings) => {
		
			let url = settings.get('url');
			let key = settings.get('key');
			let sharableURL = settings.get('sharableURL');
			
			return this.get('ajax').request(('https://www.googleapis.com/calendar/v3/calendars/' + url + '/events?key=' + key + '&maxResults=11&timeMin=' + new Date().toISOString())).then((res) => {
				let events = [];
				for(var i = 0; i < res.items.length; i++) {
					let topic = res.items[i].summary;
					let description = res.items[i].description;
					let location = res.items[i].location;
					let link = res.items[i].htmlLink;
					let start = res.items[i].start.dateTime;
					let end = res.items[i].end.dateTime;
					let date = new Date(start).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
					let startTime = new Date(start).toLocaleTimeString();
					let endTime = new Date(end).toLocaleTimeString();

					let str = "{ \"date\": \"" + date + "\", \"time\": \"" + startTime + " - " + endTime + "\", \"location\": \"" + location + "\", \"topic\": \"" + topic + "\", \"description\": \"" + description + "\" }";
					
					events.push({ str: JSON.stringify($.parseJSON(str), null, 4), url: link } )
				}

				events.sort(function (a, b) {
					return new Date($.parseJSON(a.str).date).getTime() - new Date($.parseJSON(b.str).date).getTime();
				});

				let next = events[0];
				events.shift();
				let remaining = events;

				return RSVP.hash({
					nextMeeting: next,
					upcomingMeetings: remaining,
					sharableURL: sharableURL
				});
			});
		});
	}
});
