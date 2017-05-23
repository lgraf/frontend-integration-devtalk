import Ember from 'ember';

export default Ember.Route.extend({
  mailingService: Ember.inject.service(),

  model( params ) {
    return this.get( 'mailingService' ).findById( params.mailing_id )[0];
  }

});
