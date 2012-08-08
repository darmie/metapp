// Helper: {{dateFormat date}}
Handlebars.registerHelper('dateFormat', function (timestamp) {
  function zero(n) {
    if (n < 10) {
      return '0' + n;
    }
    return n;
  }
  var a = new Date(timestamp);
  var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
                'Oct', 'Nov', 'Dec'];
  var year = a.getFullYear();
  var month = months[a.getMonth()];
  var date = a.getDate();
  var hour = zero(a.getHours());
  var min = zero(a.getMinutes());
  var sec = zero(a.getSeconds());
  var time = date + '. ' + month + ' ' + year + ' ' + hour +
         ':' + min + ':' + sec;
  return time;
});

// Helper: {{#stripes array "even" "odd"}}
// <div class="{{stripeClass}}">&nbsp;</div>
// {{else}} No Content {{/stripes}}
Handlebars.registerHelper('stripes', function (array, even, odd, fn, elseFn) {
  if (array && array.length > 0) {
    var buffer = '';
    for (var i = 0, j = array.length; i < j; i++) {
      var item = array[i];
 
      // we'll just put the appropriate stripe class name onto the item for now
      item.stripeClass = (i % 2 == 0 ? even : odd);
 
      // show the inside of the block
      buffer += fn(item);
    }
 
    // return the finished buffer
    return buffer;
  }
  else {
    return elseFn();
  }
});
