//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//need to figure out how to get the url of a closed or opened tab in chrome
window.tabs = [];
// window.contentPort;
// chrome.runtime.onConnect.addListener(function(port){
//   console.log("Background is connected to content")
//     port.onMessage.addListener(function(msg) {
//     if (msg.rq == "Tabs"){
//       console.log("Background received request for tabs");
//       getOpenTabs();
//       sendToContent();
//       // window.contentPort = port;
//       // port.postMessage({openTabs:window.tabs});
//     }
//     else {console.log("unknown message")}
//   });
// });

chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
      if (msg.rq == "Tabs"){
        console.log("Background received request for tabs");
        getOpenTabs();
        sendResponse({openTabs:window.tabs});
      // window.contentPort = port;
      // port.postMessage({openTabs:window.tabs});
        }
        else {console.log("unknown message")}
  });


function getOpenTabs(){//get current open tabs
   chrome.tabs.query({currentWindow:true},function(tabs){
    window.tabs.splice(0,window.tabs.length);//clears the window.tabs array
      console.log("\n/////////////////////\n");
      tabs.forEach(function(tab){
        console.log(tab.url);
        window.tabs.push(tab.url);
      });
      console.log("Length of window tabs is "+window.tabs.length);
 });
}

chrome.tabs.onCreated.addListener(function(windowid) {
 console.log("tab created")
 getOpenTabs();

 sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})

chrome.tabs.onRemoved.addListener(function(tabid, removed) {
 console.log("tab closed: tab id is "+tabid);
   getOpenTabs();

    sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})

chrome.windows.onRemoved.addListener(function(windowid) {
 console.log("window closed")
 getOpenTabs();
 sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window
    console.log("tab " + tabId + "updated: " + tab + "\n");
    console.log("changeInfo: " + changeInfo);
    getOpenTabs();
    sendToContent();
})

chrome.tabs.onActivated.addListener(function(TabInfo) {
    console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
    getOpenTabs();
    sendToContent();
});

function sendToContent(){
  console.log("Background is sending to content... ");
  chrome.tabs.query({active: true, currentWindow: true},
      tabs =>{chrome.tabs.sendMessage(tabs[0].id, 
        {openTabs:window.tabs});
    });
}

function openHomePage(){
   chrome.tabs.create({url: 'index.html'});
}

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'index.html'})
// })

    // chrome.runtime.onConnect.addListener(port => {
    //     console.log('connected ', port);

    //     if (port.name === 'hi') {
    //         port.onMessage.addListener(this.processMessage);
    //     }
    // });

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   // console.log("Background received message from "+sender+ " with message "+msg);
//   //     switch (msg.type) {
//   //       case 'popupInit':
//   //           sendResponse("Sending message from background: "+tabStorage[msg.tabId]);
//   //           break;
//   //       default:
//   //           sendResponse('unknown request');
//   //           break;
//   //   }

//   if(msg.greeting=="hello"){

//     sendResponse({farewell:window.tabs})
//   }
// })

// //send to localhost
// chrome.tabs.query({url:"*://localhost:*/*"}, function(tabs) {
//   chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
//     console.log("From background to content tab query "+response);
//   });
// });

// chrome.windows.getAll({populate:true}, getAllOpenWindows);

// function getAllOpenWindows(winData) {
//  console.log("Getting all opened tabs: ")
//   window.tabs = [];
//   for (var i in winData) {
//     if (winData[i].focused === true) {
//         var winTabs = winData[i].tabs;
//         var totTabs = winTabs.length;
//         for (var j=0; j<totTabs;j++) {
//           window.tabs.push(winTabs[j].url);
//         }
//     }
//   }
//   console.log(tabs);
// }