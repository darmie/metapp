var MetaAppRouter = Backbone.Router.extend({
  routes: {
    "": "index",
    "news/:news_id": "news"
  },
  index: function () {
    Session.set('news_id', null);
  },
  news: function (news_id) {
    Session.set("news_id", news_id);
  },
  setNews: function (news_id) {
    this.navigate("news/" + news_id, true);
  }
});

Router = new MetaAppRouter;

Meteor.startup(function () {
  Backbone.history.start({pushState: true});
});
