Meteor.startup(function () {
  'use strict';
  Meteor.subscribe('allposts');
});

// Output posts
Template.section.posts = function () {
  'use strict';
  return Posts.find();
};

// Events for Template Section
Template.section.events = {
  // Call Comment Submit
  'click input.submit': function () {
    'use strict';
    Meteor.call('comment',
      $('input#name').val(),
      $('input#post').val(),
      (new Date()).getTime(),
      function (error, result) {
        if (!result) {
          $('input#post').attr('placeholder', 'please type a message...');
        } else {
          if (!error) {
            $('input#name').val('');
            $('input#post').val('');
            $('input#post').attr('placeholder', 'message...');
          }
        }
      });
  },
  'click a.delete': function () {
    'use strict';
    Posts.remove(Session.get('selected_post'));
  },
  // jQuery Slide :)
  'click h3#h-posts': function () {
    'use strict';
    $('h3#h-posts').next().slideToggle();
  }
};

// Get Username for selected Post
Template.section.selected_post = function () {
  'use strict';
  var post = Posts.findOne(Session.get('selected_post'));
  return post && post.name;
};

// Select a Post
Template.post.selected = function () {
  'use strict';
  return Session.equals('selected_post', this._id) ? 'selected' : '';
};
Template.post.events = {
  'click': function () {
    'use strict';
    Session.set('selected_post', this._id);
  }
};
