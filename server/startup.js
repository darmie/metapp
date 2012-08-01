Posts = new Meteor.Collection("posts");

Meteor.startup(function () {
	var date = (new Date()).getTime();
	if (Posts.find().count() === 0) {
		Posts.insert({name: "Felix", message: "Hallo, test!", date: date});
	}
});
