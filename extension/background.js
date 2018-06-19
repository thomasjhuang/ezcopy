'use strict';
  // Called when the user clicks on the browser action.
  chrome.browserAction.onClicked.addListener(function (tab) {
    chrome.tabs.executeScript({
      code: 'document.body.style.backgroundColor="red"'
    });
  });
