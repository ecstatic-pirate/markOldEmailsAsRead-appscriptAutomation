function markOldEmailsAsRead() {
  var ageInDays = 1;
  var maxDate = new Date();
  maxDate.setDate(maxDate.getDate() - ageInDays);
  
  var searchQuery = 'is:inbox is:unread before:' + formatDate(maxDate);
  var threads = GmailApp.search(searchQuery);

  for (var i = 0; i < threads.length; i++) {
    threads[i].markRead();
  }
}

function formatDate(date) {
  var day = ('0' + date.getDate()).slice(-2);
  var month = ('0' + (date.getMonth() + 1)).slice(-2);
  var year = date.getFullYear();
  return year + '/' + month + '/' + day;
}
