import Model, { attr } from '@ember-data/model';

export default Model.extend({
  schoolName: attr('string'),
  sponsorName: attr('string'),
  email: attr('string'),
  participants: attr('number'),
  needHardware: attr('boolean')
});
