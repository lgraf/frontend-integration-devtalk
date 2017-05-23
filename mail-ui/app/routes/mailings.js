import Ember from 'ember';

export default Ember.Route.extend({
    mailingService: Ember.inject.service(),

    model() {
        return this.get( 'mailingService' ).findAll();
    }
});
