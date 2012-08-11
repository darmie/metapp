//Startup Function
Meteor.startup(function () {
  //Suscribes
  Meteor.autosubscribe(function () {
    Meteor.subscribe('news');
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
Template.section.news_session = function () {
  return Session.get('news_id');
};
Template.newsOne.title = function () {
  var a = News.findOne(Session.get('news_id'));
  return a && a.title;
};
Template.newsOne.article = function () {
  var a = News.findOne(Session.get('news_id'));
  return a && a.article;
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

//Open News
Template.news.events = {
  'click': function () {
    Router.setNews(this._id);
  }
};
