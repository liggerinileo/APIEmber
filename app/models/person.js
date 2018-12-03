import DS from 'ember-data';

export default DS.Model.extend({
  nombre: DS.attr(),
  apellido: DS.attr(),
  edad: DS.attr(),
  telefono: DS.attr(),
  direccion: DS.attr(),
  localidad: DS.attr()

});
