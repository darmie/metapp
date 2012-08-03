Posts = new Meteor.Collection("posts");

Meteor.startup(function () {
	var date = (new Date()).getTime();
	if (Posts.find().count() === 0) {
		for(var i = 0; i < 10; i++) {
			Posts.insert({name: "Felix", message: "Hallo, test!", date: date});
		}
	}
});
