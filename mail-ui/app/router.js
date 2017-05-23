import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('index', { path: '/' });
  this.route('mailings');
  this.route('mailing',{ path: '/mailings/:mailing_id' });
});

export default Router;
