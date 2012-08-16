Meteor.publish('news', function () {
  return News.find();
});
Meteor.publish('comments', function (news_id) {
  return Comments.find({news_id: news_id});
});
