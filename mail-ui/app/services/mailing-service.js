import Ember from 'ember';

export default Ember.Service.extend({

  mailings: [],

  init() {
    this._super( ...arguments );
    this.set( 'mailings', [
        {"id" : "1", "name" : "Mailing 1"},
        {"id" : "2", "name" : "Mailing 2"}
    ]);
  },

  findAll() {
    return this.get( 'mailings' );
  },

  findById( id ) {
    return this.get( 'mailings' ).filter( mailing => mailing.id === id );
  }

});
