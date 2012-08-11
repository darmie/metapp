Meteor.startup(function () {
  if(News.find().count() === 0) {
    News.insert({title: "Test News 1", article: "bla bla bla"});
    News.insert({title: "Test News 2", article: "bla bla bla"});
    News.insert({title: "Test News 3", article: "bla bla bla"});
    News.insert({title: "Test News 4", article: "bla bla bla"});
    News.insert({title: "Test News 5", article: "bla bla bla"});
    News.insert({title: "Test News 6", article: "bla bla bla"});
    News.insert({title: "Test News 7", article: "bla bla bla"});
    News.insert({title: "Test News 8", article: "bla bla bla"});
  }
});
