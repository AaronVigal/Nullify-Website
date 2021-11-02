import Model, { attr } from '@ember-data/model';
import DS from 'ember-data';

export default Model.extend({
  date: attr('date'),
  startTime: attr('date'),
  endTime: attr('date'),
  description: attr('string'),
  location: attr('string'),
  topic: attr('string'),
  zoomConf: attr('number'),
  attendees: attr('string')
});
