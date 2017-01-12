import DS from 'ember-data';

export default DS.Model.extend({
  date: DS.attr(),
  photo: DS.attr(),
  title: DS.attr(),
  content: DS.attr()
});
