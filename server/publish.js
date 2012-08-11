Meteor.publish('news', function () {
  return News.find();
});

Meteor.publish('allposts', function (news_id) {
  return Posts.find({news_id: news_id});
});
