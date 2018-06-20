chrome.extension.onMessage.addListener(
  function(request, sender, sendReponse){
    if (request.action === "prefs"){
      var prefsString = localStorage.prefs;
      if(prefsString === undefined){
        sendReponse(undefined);
      } else {
        sendresponse(JSON.parse(localStorage.prefs));
      }
    }
  });


function click(e) {
  chrome.tabs.query({currentWindow:true, active:true}, function(tabs){
    console.log("background.js : click()");
    var specTab = tabs[0];

    // injecting CSS
    chrome.tabs.insertCSS(spaceTab.id, {file:"styles.css"});
    // snipping tool : get the rectangle (coordinates) to crop
    chrome.tabs.executeScript(spaceTab.id, {file:"snipper.js"});
    // screen capture : capture the screen
    chrome.tabs.executeScript(spaceTab.id, {file:"contentscript.js"});
  });
}

// adding eventListener to the browserAction, when someone click the icon, run click function
chrome.browserAction.onClicked.addListener(click);


// 'use strict';
  // Called when the user clicks on the browser action.
//   chrome.browserAction.onClicked.addListener(function (tab) {
//     var s = document.createElement('script');
//     s.src = chrome.extension.getURL('api_ezcopy.js');
//     s.onload = function() {
//         // draw rectangle
//         alert("here");
//         var c = document.body;
//         var ctx=c.getContext("2d");
//         ctx.rect(20,20,150,100);
//         ctx.stroke();

//         this.remove();
//     };
//     (document.head || document.documentElement).appendChild(s);


// chrome.tabs.executeScript({
    //   code: 'alert(this.initDraw(document.body))' 
      
    // });

    // // let user draw the rectangle to obtain coordinates of the image.
    // function initDraw(canvas) {
    //     alert("We inside of initDraw");
    //     // alert(canvas);
    //     var mouse = {
    //         x: 0,
    //         y: 0,
    //         startX: 0,
    //         startY: 0
    //     };
    //     function setMousePosition(e) {
    //         var ev = e || window.event; //Moz || IE
    //         if (ev.pageX) { //Moz
    //             mouse.x = ev.pageX + window.pageXOffset;
    //             mouse.y = ev.pageY + window.pageYOffset;
    //         } else if (ev.clientX) { //IE
    //             mouse.x = ev.clientX + document.body.scrollLeft;
    //             mouse.y = ev.clientY + document.body.scrollTop;
    //         }
    //     };
    
    //     var element = null;    
    //     canvas.onmousemove = function (e) {
    //         setMousePosition(e);
    //         if (element !== null) {
    //             element.style.width = Math.abs(mouse.x - mouse.startX) + 'px';
    //             element.style.height = Math.abs(mouse.y - mouse.startY) + 'px';
    //             element.style.left = (mouse.x - mouse.startX < 0) ? mouse.x + 'px' : mouse.startX + 'px';
    //             element.style.top = (mouse.y - mouse.startY < 0) ? mouse.y + 'px' : mouse.startY + 'px';
    //         }
    //     }
    //     // alert("let's click it");
    //     canvas.onclick = function (e) {
    //         if (element !== null) {
    //             element = null;
    //             canvas.style.cursor = "default";
    //             console.log("finsihed.");
    //         } else {
    //             console.log("begun.");
    //             mouse.startX = mouse.x;
    //             mouse.startY = mouse.y;
    //             element = document.createElement('div');
    //             element.className = 'rectangle'
    //             element.style.left = mouse.x + 'px';
    //             element.style.top = mouse.y + 'px';
    //             canvas.appendChild(element)
    //             canvas.style.cursor = "crosshair";
    //         }
    //     }
    // }

//   });