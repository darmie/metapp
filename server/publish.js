Meteor.publish('allposts', function () {
  'use strict';
  return Posts.find();
});
