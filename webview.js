module.exports = (Franz) => {
  const getMessages = function getMessages() {

    // get new msg count
    let count = 0;
    let counters = document.querySelectorAll('.unread_message_count:not([style="display: none;"])');
    counters = Array.prototype.slice.call(counters, Math.floor(counters.length / 2));
    [].filter.call(counters, function(countValues) {
      const countValue = countValues.querySelector('.unread_message_count_value');
    	if (countValue.innerHTML.length > 0) {
        count += parseInt(countValue.innerHTML);
      }
    });
    Franz.setBadge(count);

    // force scroll to bottom of chat window
    const chatBoxes = document.querySelectorAll('.chat_dialog');
    const chatBox = [].filter.call(chatBoxes, function(chat) {
    	return (chat.style.display !== 'none');
    });
    const chatWindow = chatBox[0].querySelector('.chat_dialog_scroll');
    chatWindow.scrollTop = chatWindow.scrollHeight;
  };

  Franz.loop(getMessages);
};
