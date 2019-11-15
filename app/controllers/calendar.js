import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { A } from '@ember/array';

export default Controller.extend({
	ajax: service(),
	events: A(),
	populateCalendar() {
		let controller = this;
		controller.get('ajax').request('https://www.googleapis.com/calendar/v3/calendars/abp87jp1bn3vojv5u6j1dn18hs@group.calendar.google.com/events?key=AIzaSyDo446cXkoaH4NzMQElQjlNcquQ_wB5TOg').then((ret) => {
			for(var i = 0; i < ret.items.length; i++){
				let title = ret.items[i].summary;
				let start, end = null;
				if (ret.items[i].start.dateTime == null) {
					// This means it's an all day event and they just return mm-dd-yyyy
					start = ret.items[i].start.date;
					end = ret.items[i].end.date;
				} else {
					// This means it's an event that is just one day and gives us a full date time object
					start = ret.items[i].start.dateTime;
					end = ret.items[i].end.dateTime;
				}

				let event = {
					title: title,
					startsAt: start,
					endsAt: end
				};

				controller.get('events').addObject(event);

			}
		});
	},
	actions: {
		false() {
			return false;
		}
	}
});
