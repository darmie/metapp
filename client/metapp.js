//Startup Function
Meteor.startup(function () {
  //Clear Sessions
  Session.set('news_id', null);
  
  //Suscribes
  Meteor.subscribe('news', function () {
    if (!Session.get('news_id')) {
      var news = News.findOne();
      if (news) {
        Router.setNews(news._id);
      }
    }
  });
  Meteor.autosubscribe(function () {
    var news_id = Session.get('news_id');
    if (news_id) {
      Meteor.subscribe('allposts', Session.get('news_id'));
    }
  });
});

// Output
Template.section.news = function () {
  return News.find();
};
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
      Session.get('news_id'),
      function (error, result) {
        if (!result) {
          $('input#post').attr('placeholder', 'please type a message...');
        } else if (!error) {
          $('input#name').val('');
          $('input#post').val('');
          $('input#post').attr('placeholder', 'message...');
        }
      });
  },
  'click a.delete': function () {
    Posts.remove(Session.get('selected_post'));
  },
  // jQuery Slide :)
  'click h4#h-posts': function () {
    $('h4#h-posts').next().slideToggle();
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
