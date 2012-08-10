// Helper: {{dateFormat date}}
Handlebars.registerHelper('dateFormat', function (timestamp) {
  function zero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }
  var a = new Date(timestamp),
    months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
              'Oct', 'Nov', 'Dec'],
    year = a.getFullYear(),
    month = months[a.getMonth()],
    date = a.getDate(),
    hour = zero(a.getHours()),
    min = zero(a.getMinutes()),
    sec = zero(a.getSeconds()),
    time = date + '. ' + month + ' ' + year + ' ' +
           hour + ':' + min + ':' + sec;
  return time;
});
