import Route from '@ember/routing/route';
import RSVP from 'rsvp';
import $ from 'jquery';

export default Route.extend({
	// ajax: service(),
	// model() {
	// 	return this.store.findRecord('calendar', 'qw8iinzlYK8CQgnyUNLz').then((settings) => {
		
	// 		let url = settings.get('url');
	// 		let key = settings.get('key');
	// 		let sharableURL = settings.get('sharableURL');
			
	// 		return this.get('ajax').request(('https://www.googleapis.com/calendar/v3/calendars/' + url + '/events?key=' + key + '&maxResults=11&timeMin=' + new Date().toISOString())).then((res) => {
	// 			let events = [];
	// 			for(var i = 0; i < res.items.length; i++) {
	// 				let topic = meetings[i].get("summary;
	// 				let description = meetings[i].get("description;
	// 				let location = meetings[i].get("location;
	// 				let link = meetings[i].get("htmlLink;
	// 				let start = meetings[i].get("start.dateTime;
	// 				let end = meetings[i].get("end.dateTime;
	// 				let date = new Date(start).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
	// 				let startTime = new Date(start).toLocaleTimeString();
	// 				let endTime = new Date(end).toLocaleTimeString();

	// 				let str = "{ \"date\": \"" + date + "\", \"time\": \"" + startTime + " - " + endTime + "\", \"location\": \"" + location + "\", \"topic\": \"" + topic + "\", \"description\": \"" + description + "\" }";
					
	// 				events.push({ str: JSON.stringify($.parseJSON(str), null, 4), url: link } )
	// 			}

	// 			events.sort(function (a, b) {
	// 				return new Date($.parseJSON(a.str).date).getTime() - new Date($.parseJSON(b.str).date).getTime();
	// 			});

	// 			let next = events[0];
	// 			events.shift();
	// 			let remaining = events;

	// 			return RSVP.hash({
	// 				nextMeeting: next,
	// 				upcomingMeetings: remaining,
	// 				sharableURL: sharableURL
	// 			});
	// 		});
	// 	});
	// }
	model() {
		return this.store.findAll('meeting').then((meetings) => {
			let events = [];
			for(var i = 0; i < meetings.length; i++) {
				let meeting = this.store.peekRecord('meeting', meetings.content[i]._id);

				let topic = meeting.get("topic");
				let description = meeting.get("description");
				let location = meeting.get("location");
				let link = "https://google.com";
				let date = new Date(meeting.get("date")).toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
				let startTime = new Date(meeting.get("startTime")).toLocaleTimeString();
				let endTime = new Date(meeting.get("endTime")).toLocaleTimeString();

				let str = "{ \"date\": \"" + date + "\", \"time\": \"" + startTime + " - " + endTime + "\", \"location\": \"" + location + "\", \"topic\": \"" + topic + "\", \"description\": \"" + description + "\" }";

				events.push({ id: meeting.get("id"), str: JSON.stringify($.parseJSON(str), null, 4), url: link } )
			}

			events.sort(function (a, b) {
				return new Date($.parseJSON(a.str).date).getTime() - new Date($.parseJSON(b.str).date).getTime();
			});

			// TODO: FIX THISSSSSSSSS August 6th
			console.log(new Date($.parseJSON(events[0].str).date).getTime() < new Date().getTime());

			let next = events[0];
			events.shift();
			let remaining = events;

			return RSVP.hash({
				nextMeeting: next,
				upcomingMeetings: remaining,
				// TODO
				// sharableURL: sharableURL
			});
		});
	}
});
