Meteor.startup(function () {
  Meteor.subscribe('allposts');
});

// Output posts
Template.section.posts = function () {
  return Posts.find();
};

// Events for Template Section
Template.section.events = {
  // Call Comment Submit
  'click input.submit': function () {
    Meteor.call('comment',
      $('input#name').val(),
      $('input#post').val(),
      (new Date()).getTime(),
      function (error, result) {
        if (!result) {
          $('input#post').attr('placeholder', 'please type a message...');
        }
        else if (!error) {
          $('input#name').val('');
          $('input#post').val('');
        }
      }
    );
  },
  'click a.delete': function () {
    Posts.remove(Session.get('selected_post'));
  }
};

// Get Username for selected Post
Template.section.selected_post = function () {
  var post = Posts.findOne(Session.get('selected_post'));
  return post && post.name;
};

// Select a Post
Template.post.selected = function () {
  return Session.equals('selected_post', this._id) ? 'selected' : '';
};
Template.post.events = {
  'click': function () {
    Session.set('selected_post', this._id);
  }
};
