import DS from 'ember-data';

export default DS.Model.extend({
  model(){
    return this.store.createRecord('person');
  },
  actions: {
    save(model){
      model.save();
    }
  }
});
