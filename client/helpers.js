// Helper: {{dateFormat}}
Handlebars.registerHelper('dateFormat', function(timestamp) {
	var a = new Date(timestamp);	
	//return a.toGMTString();
	//return a.toISOString();
	return a.toLocaleString();
});

// 2. Möglichkeit
Handlebars.registerHelper('dateFormat2', function(timestamp) {
	var a = new Date(timestamp);
	var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
	var year = a.getFullYear();
	var month = months[a.getMonth()];
	var date = a.getDate();
	var hour = a.getHours();
	var min = a.getMinutes();
	var sec = a.getSeconds();
	var time = date + '. ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
	return time;
});




