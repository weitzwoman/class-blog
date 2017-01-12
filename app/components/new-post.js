import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        date: this.get('date'),
        photo: this.get('photo'),
        content: this.get('content')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params);
    }
  }
});
