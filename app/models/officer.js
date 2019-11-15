import DS from 'ember-data';
const { attr } = DS;

export default DS.Model.extend({
	name: attr('string'),
	position: attr('string'),
	about: attr('string'),
	email: attr('string'),
	photo: attr('string'),
	order: attr('number')
});
