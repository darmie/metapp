var MetaAppRouter = Backbone.Router.extend({
  routes: {
    'news/:news_id': 'news',
    '': 'index'
  },
  news: function (news_id) {
    Session.set('news_id', news_id);
  },
  index: function () {
    Session.set('news_id', null);
  },
  setNews: function (news_id) {
    this.navigate('news/' + news_id, true);
  }
});

Router = new MetaAppRouter;

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});
