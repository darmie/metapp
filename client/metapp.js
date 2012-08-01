Posts = new Meteor.Collection("posts");
	
Template.section.posts = function () {
	return Posts.find();
};

Template.section.events = {
	'click input.inc': function () {
		var date = (new Date()).getTime();
		Posts.insert({name: $("#name").val(), message: $("#post").val(), date: date});
	},
	'click a.delete': function () {
		Posts.remove(Session.get("selected_post"));
	}
};

Template.section.selected_post = function () {
	var post = Posts.findOne(Session.get("selected_post"));
	return post && post.name;
};

Template.post.selected = function () {
	return Session.equals("selected_post", this._id) ? "selected" : '';
};

Template.post.events = {
	'click': function () {
		Session.set("selected_post", this._id);
	}
};

