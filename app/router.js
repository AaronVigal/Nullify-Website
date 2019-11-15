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
  });
  this.route('404', { path: '/*path' })
});

export default Router;
