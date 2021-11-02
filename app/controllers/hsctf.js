import Controller from '@ember/controller';

export default Controller.extend({

	schoolName: '',
	sponsorName: '',
	email: '',
	participants: '',

	submitted: false,
	error: false,
	errorText: '',

	needHardwareOptions: ['No', 'Yes'],
	selectedHardware: 'false',

	actions: {
		submit() {
			if(this.schoolName && this.sponsorName && this.email && this.participants){
				let needsHardware = this.selectedHardware === 'true';
				let submission = this.store.createRecord('hsctf-submission', {
					schoolName: this.schoolName,
					sponsorName: this.sponsorName,
					email: this.email,
					participants: this.participants,
					needHardware: needsHardware,
				});
				submission.save().then((result) => {
					if(result.isError){
						this.set('error', true);
						this.set('errorText', "There was an error submitting your information. Please try again later, or send us an email at nullify@unomaha.edu");
						this.set('submitted', false);
					} else {
						this.set('error', false);
						this.set('submitted', true);
					}
				});
				
			} else {
				this.set('errorText', 'Please fill out all of the required fields before accepting the mission.');
				this.set('error', true);
			}
		}
	}
});
