document.getElementById('hotkey').onclick = event => {
  chrome.tabs.create({url: 'chrome://extensions/configureCommands'});
  event.preventDefault();
};