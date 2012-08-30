# Helper: {{dateFormat date}}
Handlebars.registerHelper('dateFormat', (timestamp) ->
  zero = (n) ->
    if n < 10
      n = '0' + n
    n
  date = new Date(timestamp)
  months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
            'Oct', 'Nov', 'Dec']
  year = date.getFullYear()
  month = months[date.getMonth()]
  day = date.getDate()
  hour = date.getHours()
  min = zero(date.getMinutes())
  sec = zero(date.getSeconds())
  day + '. ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec
)
