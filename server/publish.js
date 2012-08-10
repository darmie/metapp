Meteor.publish('allposts', function () {
  return Posts.find();
});
