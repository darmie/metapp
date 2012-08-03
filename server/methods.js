Meteor.methods({
	comment: function(name, message, date) {
		if(message) {
			if(!name) {
				var name = "Anonymous";
			}
			Posts.insert({name: name, message: message, date: date});
			return true;
		} else {
			return false;
		}
	}
});
