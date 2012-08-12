Meteor.methods({
  comment: function (name, message, news_id) {
    if (message) {
      if (!name) {
        name = 'Anonymous';
      }
      var date = (new Date()).getTime();
      Comments.insert({name: name, message: message, date: date, news_id: news_id});
      return true;
    }
    return false;
  }
});
