'use strict';

module.exports = Franz => {
  const getMessages = function getMessages() {
    // get new msg count
    var count = 0;
    var counters = document.querySelectorAll('.chatTabUnreadBadge');
    [].filter.call(counters, countValues => {
      count += parseFloat(countValues.innerHTML);
    });
    Franz.setBadge(count);
  };

  Franz.loop(getMessages);
};
