import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Controller.extend({
	moment: service(),
	user: service(),
	desktop: false,
	checkedIn: false,
	init() {
		this._super(...arguments);
		if ((navigator.userAgent.indexOf("Win") != -1)
			|| (navigator.userAgent.indexOf("Mac") != -1)
			|| (navigator.userAgent.indexOf("Linux") != -1)) {
			this.set('desktop', true);
		}
	},
	showCheckin: computed('model.date', 'model.startTime', 'model.endTime', function () {

		let uid = this.get('user.session.data.authenticated.user.uid');
		let attendees = this.get('model.attendees');
		let arr = attendees.split(",");
		if(!(arr.includes(uid))){
			let date = this.get('model.date');
			let time = this.get('model.startTime');
			let endTime = this.get('model.endTime');
			let meetingDate = new Date(date.getFullYear(), date.getMonth(), date.getDate(), time.getHours(), time.getMinutes(), 0);
			let endAt = new Date(date.getFullYear(), date.getMonth(), date.getDate(), endTime.getHours(), endTime.getMinutes(), 0);

			let today = new Date();

			console.log(today.getTime() - meetingDate.getTime())

			// Check if it's the same day, month and year as the meeting
			if (today.getDate() === meetingDate.getDate() 
				&& today.getMonth() === meetingDate.getMonth()
				&& today.getFullYear() === meetingDate.getFullYear()){

					// Check if it's up to 30 minutes before the meeting and before the end of the meeting
					let THIRTY_MINUTES = 30 * 60 * 1000; // Milliseconds

					if ((((meetingDate.getTime() - THIRTY_MINUTES) < today.getTime())) && (today.getTime() < endAt.getTime())){
						return true;
					}
			}
		} else {
			this.set('checkedIn', true);
		}
		return false;
	}), 

	actions: {
		checkin() {

			this.store.findRecord('meeting', this.model.id).then((meeting) => {
				let attendees = meeting.get('attendees');
				console.log(attendees)
				// attendees += (this.get('user.session'))
				let uid = this.get('user.session.data.authenticated.user.uid');
				attendees += (uid + ',');
				meeting.attendees = attendees;
				meeting.save();
			});

			this.set('checkedIn', true);
		}
	}
});
