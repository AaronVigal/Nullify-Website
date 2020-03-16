import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('about');
  this.route('contact');
  this.route('sponsors');
  this.route('resources');
  this.route('hsctf');
  this.route('calendar');
  this.route('login');
  this.route('admin', function() {
    this.route('announcement');
    this.route('calendar');
    this.route('officers');
    this.route('resources');
  });
  this.route('404', { path: '/*path' })
  this.route('contribute', function() {
    this.route('resource-name');
    this.route('resource-url');
    this.route('resource-tags');
    this.route('resource-finish');
  });
});

export default Router;
