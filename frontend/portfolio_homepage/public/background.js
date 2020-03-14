//TODO currently clumsy way of getting tabs (recomputing all opened tabs when tab opened/closed)
//need to figure out how to get the url of a closed or opened tab in chrome
window.tabs = [];

var tabsInWindow = {} //tabsInWindow[x] stores all tabs in the window with the windowid 'x'


chrome.runtime.onMessage.addListener(
  function(msg, sender, sendResponse) {
      if (msg.rq == "Tabs"){
        //console.log("Background received request for tabs");
        getOpenTabs();
        sendResponse({openTabs:window.tabs});
      // window.contentPort = port;
      // port.postMessage({openTabs:window.tabs});
        }
        else {//console.log("unknown message")
      }
  });

function getClosedTabs(windowid){//gets closed tabs by comparing tabs that were opened before and tabs currently opened
    printTabsInWindow();
    var closedWindowTabs = tabsInWindow[windowid];
    tabsInWindow[windowid] = [];
    console.log("getClosedTabs received window id "+windowid +" and is returning "+closedWindowTabs);
    return closedWindowTabs;
}

function getOpenTabs(){//get current open tabs urls
   chrome.tabs.query({currentWindow:true},function(tabs){
    window.tabs.splice(0,window.tabs.length);//clears the window.tabs array
    if(Array.isArray(tabs) && tabs.length){ //if tabs is not empty
      tabs.forEach(function(tab){
        //console.log("Tab id is "+tab.id);
        window.tabs.push(tab.url);
      });
    }
      // //console.log("Length of window tabs is "+window.tabs.length);
 });
}

chrome.tabs.onCreated.addListener(function(tab) {
 //console.log("tab created");
 getOpenTabs();
 var windowid = tab.windowId;
  console.log("tab window id is "+windowid)
  tabsInWindow[windowid] = window.tabs;
  console.log("Tabs in window "+windowid+" are "+tabsInWindow[windowid].toString())
 sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})


chrome.windows.onRemoved.addListener(function(windowid) {
 alert("window closed. window id is "+windowid);
 console.log("window closed. window id is "+windowid);
 var closedTabsInWindow = getClosedTabs(windowid);
 console.log("The "+tabs.length+" closed tabs are "+closedTabsInWindow.toString());
 alert("The "+tabs.length+" closed tabs are "+closedTabsInWindow.toString());

 // getOpenTabs(); tabs.onRemoved is already updating window tabs
 sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})


chrome.tabs.onRemoved.addListener(function(tabid, removed) {
 alert("tab closed: tab id is "+tabid);
    getOpenTabs();

    sendToContent();
 // window.contentPort.postMessage({openTabs:window.tabs});
})


chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {//when a newtab is created, get info on how many tabs in current opened window
    //console.log("tab " + tabId + "updated: " + tab + "\n");
    //console.log("changeInfo: " + changeInfo);
    getOpenTabs();
    sendToContent();
})

chrome.tabs.onActivated.addListener(function(TabInfo) {
    //console.log("current tab selected is" + TabInfo.tabId + " in window " + TabInfo.windowId);
    getOpenTabs();
    sendToContent();
});

function sendToContent(){
  //console.log("Background is sending to content... ");
  chrome.tabs.query({active: true, currentWindow: true},
      tabs =>{
        if(tabs[0]!=undefined)
        chrome.tabs.sendMessage(tabs[0].id, 
        {openTabs:window.tabs});
    });
}

function openHomePage(){
   chrome.tabs.create({url: 'index.html'});
}

//prints all tabs in the window
function printTabsInWindow(){

  for (var w in tabsInWindow) {
    if (tabsInWindow.hasOwnProperty(w)) {
      console.log("Window "+w+"has tabs "+tabsInWindow[w].toString())
    }
  }

}

// chrome.browserAction.onClicked.addListener(function (tab) {
//   chrome.tabs.create({url: 'index.html'})
// })

    // chrome.runtime.onConnect.addListener(port => {
    //     //console.log('connected ', port);

    //     if (port.name === 'hi') {
    //         port.onMessage.addListener(this.processMessage);
    //     }
    // });

// chrome.runtime.onMessage.addListener(function (msg, sender, sendResponse) {
//   // //console.log("Background received message from "+sender+ " with message "+msg);
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
//     //console.log("From background to content tab query "+response);
//   });
// });

// chrome.windows.getAll({populate:true}, getAllOpenWindows);

// function getAllOpenWindows(winData) {
//  //console.log("Getting all opened tabs: ")
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
//   //console.log(tabs);
// }