Posts = new Meteor.Collection('posts');

Meteor.publish('allposts', function () {
  return Posts.find();
});
