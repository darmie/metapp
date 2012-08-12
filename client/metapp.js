//Startup Function
Meteor.startup(function () {
  //Suscribes
  Meteor.autosubscribe(function () {
    Meteor.subscribe('news');
  });
  Meteor.autosubscribe(function () {
    var news_id = Session.get('news_id');
    if (news_id) {
      Meteor.subscribe('comments', Session.get('news_id'));
    }
  });
});

// Output
Template.section.news = function () {
  return News.find();
};
Template.section.comments = function () {
  return Comments.find();
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
Template.comment_header.events = {
  // jQuery Slide :)
  'click h4#h-comments': function () {
    $('h4#h-comments').next().slideToggle();
  }
};
Template.comment_footer.events = {
  // Call Comment Submit
  'click input.submit': function () {
    Meteor.call('comment',
      $('input#name').val(),
      $('input#comment').val(),
      Session.get('news_id'),
      function (error, result) {
        if (!result) {
          $('input#comment').attr('placeholder', 'please type a message...');
        } else if (!error) {
          $('input#name').val('');
          $('input#comment').val('');
          $('input#comment').attr('placeholder', 'message...');
        }
      });
  },
  'click a.delete': function () {
    Comments.remove(Session.get('selected_comment'));
  }
};

// Get Username for selected Post
Template.comment_footer.selected_comment = function () {
  var comment = Comments.findOne(Session.get('selected_comment'));
  return comment && comment.name;
};

// Select a Post
Template.comment.selected = function () {
  return Session.equals('selected_comment', this._id) ? 'selected' : '';
};
Template.comment.events = {
  'click': function () {
    Session.set('selected_comment', this._id);
  }
};

// Open News
Template.news.events = {
  'click': function () {
    Router.setNews(this._id);
  }
};

// Session SET
Template.section.news_session = function () {
  return Session.get('news_id');
};
