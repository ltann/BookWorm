(this.webpackJsonpportfolio_homepage=this.webpackJsonpportfolio_homepage||[]).push([[0],{142:function(e,t,n){e.exports=n(348)},147:function(e,t,n){},151:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},164:function(e,t,n){},183:function(e,t,n){},347:function(e,t,n){},348:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(31),s=n.n(a),l=(n(147),n(148),n(149),n(150),n(7)),c=n(8),i=n(22),u=n(10),d=n(9),h=(n(151),n(6)),m=n.n(h),p=n(24),f=n(14),b=n(48),k=n(51),g=n.n(k),v=(n(153),n(157),g.a.initializeApp({apiKey:"AIzaSyBkGGKw3_CKSVlsK8XUWRqmjTqcggTmtU0",authDomain:"bookworm-backend.firebaseapp.com",databaseURL:"https://bookworm-backend.firebaseio.com",projectId:"bookworm-backend",storageBucket:"bookworm-backend.appspot.com",messagingSenderId:"845803795351",appId:"1:845803795351:web:ffc463d678559e9118cad2",measurementId:"G-8FV64KKTXN"}),g.a.auth()),w=g.a.firestore(),E=new g.a.auth.GoogleAuthProvider,y=function(){v.signInWithPopup(E).then((function(e){console.log("Google login success!:"),console.log(e)}))},x=function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=w.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=15;break}return e.prev=7,e.next=10,n.set({email:t.email,photoURL:t.photoURL});case 10:e.next=15;break;case 12:e.prev=12,e.t0=e.catch(7),console.error("Error creating user document",e.t0);case 15:return e.abrupt("return",S(t.uid));case 16:case"end":return e.stop()}}),e,null,[[7,12]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(f.a)(m.a.mark((function e(t){var n;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return e.prev=2,e.next=5,w.doc("users/".concat(t)).get();case 5:return n=e.sent,e.abrupt("return",Object(b.a)({uid:t},n.data()));case 9:e.prev=9,e.t0=e.catch(2),console.error("Error fetching user",e.t0);case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),W=n(364),O=(n(42),n(94),function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).getBaseUrl=function(e){return new RegExp(/^.*\//).exec(e)},o.filterURLs=function(e){var t=[];t=""!==e.target.value?o.props.urls.filter((function(t){var n=t.toLowerCase(),o=e.target.value.toLowerCase();return n.includes(o)})):o.props.urls,console.log("newList in wormhole is "+t.toString()),o.setState({searchResults:t})},o.state={searchResults:[]},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"popup"},r.a.createElement("div",null,r.a.createElement("h3",null,"Wormhole"),r.a.createElement("form",{className:"input"},r.a.createElement("input",{type:"text",onChange:this.filterURLs,placeholder:"Search..."})),r.a.createElement("ul",{className:"wormhole-list"},this.state.searchResults.map((function(e){return r.a.createElement("li",null,r.a.createElement("span",null,r.a.createElement("a",null,e," \xa0")))}))),r.a.createElement("button",{onClick:function(){return e.props.toggleWormhole(!1)}},"Back")))}}]),n}(o.Component)),j=(n(159),n(88)),B=n.n(j),C=(o.Component,function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).openURLs=function(e){e.preventDefault(),null==o.props.urls?alert("No urls to open"):chrome.runtime.sendMessage({rq:"openWindowOfTabs",urlsToLaunch:o.props.urls},o._cbWindow.bind(Object(i.a)(o)))},o._cbWindow=function(e){o.props.updateWindow(o.props.book,e.windowId,o.props.book.Launch,o.props.book.WormHole)},o.state={urls:[]},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){this.setState({urls:this.props.urls})}},{key:"render",value:function(){return r.a.createElement("div",{className:"launcher",onClick:this.openURLs},"Launcher")}}]),n}(o.Component)),L=(n(160),o.Component,function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){null==o.props.linkedWindowId&&alert("linked window is null"),o.setState({linkedWindow:o.props.linkedWindowId})},o.state={linkedWindow:-999},o}return Object(c.a)(n,[{key:"render",value:function(){return r.a.createElement("div",null,"linkedWindow: ",this.props.linkedWindowId)}}]),n}(o.Component)),N=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.setState({linkedWindowId:o.props.book.linkedWindowId,book:o.props.book,title:o.props.book.title}),o.props.book.linkedWindowId>=0&&(chrome.runtime.sendMessage({rq:"urlsForLaunch",winId:o.props.book.linkedWindowId},o._cbForLaunchResponse),chrome.runtime.sendMessage({rq:"urlsForWormhole",winId:o.props.book.linkedWindowId},o._cbForWormholeResponse)),chrome.runtime.onMessage.addListener(o.handleMessage.bind(Object(i.a)(o)))},o._cbForLaunchResponse=function(e){e.urlsForLaunch&&e.urlsForLaunch.length&&o.props.updateBook(o.props.book,o.props.book.linkedWindowId,e.urlsForLaunch,o.props.book.WormHole)},o._cbForWormholeResponse=function(e){e.urlsForWormhole&&e.urlsForWormhole.length&&o.props.updateBook(o.props.book,o.props.book.linkedWindowId,o.props.book.Launch,e.urlsForWormhole)},o.setLinkedWindow=function(e){o.setState({linkedWindowId:e},(function(){o.props.updateBook(o.props.book,e,o.state.launchURLs,o.state.wormholeURLs)}))},o.state={linkedWindowId:-100,book:null,title:"",isHovered:!1},o.handleMessage.bind(Object(i.a)(o)),o}return Object(c.a)(n,[{key:"handleMessage",value:function(e,t,n){e.winId==this.props.book.linkedWindowId&&(this._cbForLaunchResponse(e),this._cbForWormholeResponse(e))}},{key:"createHoverMenu",value:function(){var e=this;return r.a.createElement("div",{className:"hover-menu"},r.a.createElement(C,{book:this.props.book,updateWindow:this.props.updateBook,urls:this.props.book.Launch}),r.a.createElement("div",{className:"wormhole",onClick:function(){return e.props.toggleWormhole(!0)}},"Wormhole"))}},{key:"render",value:function(){var e=this,t=this.createHoverMenu();return r.a.createElement("div",null,r.a.createElement("div",null," ",r.a.createElement(L,{linkedWindowId:this.props.book.linkedWindowId})," "),r.a.createElement("div",{className:"book",onMouseEnter:function(){return e.setState({isHovered:!0})},onMouseLeave:function(){return e.setState({isHovered:!1})}},this.state.isHovered?t:r.a.createElement("div",{className:"bk_title"},r.a.createElement("h1",null,this.state.title))),this.props.isShowingWormhole?r.a.createElement("div",null,r.a.createElement(O,{urls:this.props.book.WormHole,toggleWormhole:this.props.toggleWormhole})):r.a.createElement("div",null))}}]),n}(o.Component),F=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={width:800,height:182,bookSize:320},e}return Object(c.a)(n,[{key:"updateDimensions",value:function(){var e=window.innerWidth-100,t=Math.round(e/4.4);this.setState({width:e,height:t}),this.props.setNumBksPerShelf(Math.round(e/this.state.bookSize))}},{key:"componentDidMount",value:function(){this.updateDimensions(),window.addEventListener("resize",this.updateDimensions.bind(this))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.updateDimensions.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",null)}}]),n}(o.Component),I=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).createBook=function(e,t){return r.a.createElement(W.a,{key:t,item:!0,xs:!0,zeroMinWidth:!0},null===e?null:r.a.createElement("div",{key:e.key},r.a.createElement("button",{onClick:function(){return o.deleteBook(e)}},"..."),r.a.createElement(N,{book:e,updateBook:o.props.updateBook,toggleWormhole:o.toggleWormhole,isShowingWormhole:o.state.isShowingWormhole})))},o.createShelf=function(e,t){var n=o.state.numBksPerShelf;return r.a.createElement(W.a,{key:t,container:!0,spacing:n},e.map(o.createBook))},o.separateBooksIntoShelves=function(e,t){return r.a.createElement("div",null,e.map(o.createShelf))},o.deleteBook=function(e){console.log(e.title+" Key is "+e.key),o.props.deleteBook(e)},o.setNumBooksPerShelf=function(e){o.setState({numBksPerShelf:e})},o.toggleWormhole=function(e){o.setState({isShowingWormhole:e})},o.state={isShowingWormhole:!1,numBksPerShelf:4},o}return Object(c.a)(n,[{key:"create2DArrayOfBooks",value:function(e){for(var t=Math.ceil(e.length/this.state.numBksPerShelf),n=new Array(t),o=0;o<n.length;o++)n[o]=new Array(this.state.numBksPerShelf);for(var r=0;r<t;r++)for(var a=0;a<this.state.numBksPerShelf;a++){var s=r*this.state.numBksPerShelf+a;s<e.length?n[r][a]=e[s]:n[r][a]=null,"Shelf ("+r+","+a+") is "+n[r][a]+"\n"}return n}},{key:"render",value:function(){var e=this.props.bks,t=this.create2DArrayOfBooks(e),n=this.separateBooksIntoShelves(t,e.length);return r.a.createElement("div",null,r.a.createElement(F,{setNumBksPerShelf:this.setNumBooksPerShelf}),r.a.createElement("div",{className:"book-shelf"},n))}},{key:"printBkList",value:function(e){console.log("Printing Book List");for(var t=0;t<e.length;t++){var n=e[t];this.printBook(t,n)}}},{key:"printBook",value:function(e,t){var n=[];for(var o in n.push("Item "+e+": "),t)t.hasOwnProperty(o)?n.push(t[o]+","):n.push("Null");console.log(n.join(""))}}]),n}(o.Component),P=n(49),D=n(134),R=(n(164),function(e){var t=e.label,n=e.isSelected,o=e.onCheckboxChange;return r.a.createElement("div",{className:"form-check"},r.a.createElement("label",null,r.a.createElement("input",{type:"checkbox",name:t,checked:n,onChange:o,className:"form-check-input"}),t))}),M=["Link book to window"],_=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).handleFocus=function(e){return e.target.select()},o.createBook=function(e){o.checkDuplicates(o._inputTitle.value)?(o._inputTitle.value="",o.setState({newBook:null})):chrome.runtime.sendMessage({rq:"getCurrWindowId"},o._cbWindowIdResponse.bind(Object(i.a)(o))),e.preventDefault()},o.checkDuplicates=function(e){var t=!1;if(0!==o.props.bks.length){var n,r=Object(D.a)(o.props.bks);try{for(r.s();!(n=r.n()).done;){if(n.value.title===e){alert(e+" already exists!"),t=!0;break}}}catch(a){r.e(a)}finally{r.f()}}return t},o.handleCheckboxChange=function(e){var t=e.target.name;o.setState((function(e){return{checkboxes:Object(b.a)({},e.checkboxes,Object(P.a)({},t,!e.checkboxes[t]))}}))},o.createCheckbox=function(e){return r.a.createElement(R,{label:e,isSelected:o.state.checkboxes[e],onCheckboxChange:o.handleCheckboxChange,key:e})},o.createCheckboxes=function(){return M.map(o.createCheckbox)},o.state={title:"",newBook:null,checkboxes:M.reduce((function(e,t){return Object(b.a)({},e,Object(P.a)({},t,!1))}),{})},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"popup"},r.a.createElement("div",{className:"book"},r.a.createElement("h2",null,"Name of the book: "),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.createBook},r.a.createElement("input",{ref:function(t){return e._inputTitle=t},placeholder:"Enter Title Here",defaultValue:"Title",autoFocus:!0,onFocus:this.handleFocus}),this.createCheckboxes(),r.a.createElement("span",null,r.a.createElement("button",{type:"submit"},"Add"))),r.a.createElement("button",{onClick:this.props.closePopup},"Cancel")))))}},{key:"_cbWindowIdResponse",value:function(e){var t=this,n=e.windowId;null==n&&alert("window id is null");var o=-1;Object.keys(this.state.checkboxes).filter((function(e){return t.state.checkboxes[e]})).forEach((function(e){console.log(e,"is selected."),"Link book to window"==e&&(o=n)}));var r={key:Date.now(),title:this._inputTitle.value,time_created:Date.now(),linkedWindowId:o,Launch:this.props.urlsForLaunch,WormHole:this.props.urlsForWormhole};console.log("Linking current window "+n.toString()+" to book: "+r.title+" so nb linked window is "+r.linkedWindowId),this.props.addBook(r),this._inputTitle.value="",this.setState({newBook:null})}}]),n}(o.Component),A=n(29),H=(n(183),"ascending"),T="None",U="Title",z="Date Created",q="Last Accessed",G=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).sort=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U;switch(t){case U:e.sortByTitle();break;case z:e.sortByDateCreated();break;case q:e.sortByLastAccessed()}},e.toggleOrder=function(){e.state.order===H?e.setState({order:"descending"}):e.setState({order:H}),e.sort()},e.sortByTitle=function(){e.setState({sortCriteria:U});var t=Object(p.a)(e.props.books);t.sort((function(t,n){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H,o=e.title.toLowerCase().localeCompare(t.title.toLowerCase());return console.log("Diff is "+o+", and order is "+n),n===H?o:-1*o}(t,n,e.state.order)})),e.props.setBooks(t)},e.sortByDateCreated=function(){e.setState({sortCriteria:z});var t=Object(p.a)(e.props.books);console.log("Sort by date created has not been implemented"),t.sort((function(t,n){return function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H,o=e.key-t.key;return n===H?o:-1*o}(t,n,e.state.order)})),e.props.setBooks(t)},e.sortByLastAccessed=function(){e.setState({sortCriteria:q}),console.log("Sort by last accessed has not been implemented"),alert("Sort by last accessed has not been implemented")},e.state={sortCriteria:T,order:H,books:[]},e}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:this.props.isBlurred?"blur-bg":"clear-bg"},r.a.createElement(A.c,{className:"sort-btn-container"},"Sort By:",r.a.createElement(A.d,{size:"sm"},r.a.createElement(A.g,{caret:!0,color:"info"},this.state.sortCriteria),r.a.createElement(A.f,null,r.a.createElement(A.e,{onClick:function(){e.sort(U)}},U),r.a.createElement(A.e,{onClick:function(){e.sort(z)}},z),r.a.createElement(A.e,{onClick:function(){e.sort(q)}},q))),r.a.createElement(A.b,{size:"sm",onClick:this.toggleOrder},this.state.order===H?r.a.createElement("div",null,"\u25b2"):r.a.createElement("div",null,"\u25bc"))))}}]),n}(o.Component),K=n(140),V=function(){var e=Object(f.a)(m.a.mark((function e(t,n){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=w.collection("users/".concat(n,"/bookData")).doc(t.key.toString()),e.next=3,o.get().then(function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exists){e.next=6;break}console.log("book already exists"),console.log(n.id),console.log(n.data()),e.next=9;break;case 6:return console.log("initializing book "+t.title),e.next=9,o.set({title:t.title,linkedWindowId:t.linkedWindowId,Launch:t.Launch,WormHole:t.WormHole});case 9:return e.abrupt("return",!0);case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log("Error getting from storing book: "+e),!1}));case 3:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),J=function(){var e=Object(f.a)(m.a.mark((function e(t,n){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=w.collection("users/".concat(n,"/bookData")).doc(t.key.toString()),e.next=3,o.get().then(function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!n.exists){e.next=7;break}return e.next=3,o.update({linkedWindowId:t.linkedWindowId,Launch:t.Launch,WormHole:t.WormHole});case 3:return console.log("database updated book"+t.title+" linked window to be "+o.linkedWindowId),e.abrupt("return",!0);case 7:return console.log("book doesn't exist in database..."),e.abrupt("return",!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){return console.log(e)}));case 3:return e.abrupt("return",!0);case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),X=function(){var e=Object(f.a)(m.a.mark((function e(t){var n,o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("updating portfolio homepage with books from "+t),n=[],o=w.collection("users/".concat(t,"/bookData")),e.next=5,o.get().then(function(){var e=Object(f.a)(m.a.mark((function e(o){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("iterating through user: "+t+" bookData"),e.next=3,o.docs.forEach((function(e){var t=e.data();t.key=e.id,n.push(t)}));case 3:return e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return e}));case 5:return e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),Y=function(){var e=Object(f.a)(m.a.mark((function e(t,n){var o;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log("deleting book "+t.title+" for user: "+n),o=w.doc("users/".concat(n,"/bookData/").concat(t.key.toString())),e.next=4,o.get().then((function(e){o.delete().then((function(){})).catch((function(e){console.error("Error removing document: ",e)}))}));case 4:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),$=function(){var e=Object(f.a)(m.a.mark((function e(t,n,o){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.linkedWindowId===n&&(r=w.doc("users/".concat(o,"/bookData/").concat(t.key.toString()))).get().then(function(){var e=Object(f.a)(m.a.mark((function e(o){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!o.exists){e.next=3;break}return e.next=3,r.update({linkedWindowId:-132}).then((function(){console.log("Delinked successful for "+t.title+" and window "+n)})).catch((function(e){console.error("error updating book with delinking: ",e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 1:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),Q=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).componentDidMount=function(){o.setState({bookshelf:o.props.books})},o._cbForLaunchResponse=function(e){o.setState({urlsForLaunch:e.urlsForLaunch}),console.log("state of book after LAUNCH update from background:")},o._cbForWormholeResponse=function(e){o.setState({urlsForWormhole:e.urlsForWormhole}),console.log("state of book after WORMHOLE update from background:"),console.log(o.state.bookshelf)},o.toggleAddBook=function(){o.setState({addingBook:!o.state.addingBook})},o.updateBook=function(e,t,n,r){var a=o.state.bookshelf.map((function(o,a){return o.key==e.key&&(o.linkedWindowId=t,o.WormHole=r,o.Launch=n),o}));e.linkedWindowId=t,e.WormHole=r,e.Launch=n,J(e,o.props.user.uid).then((function(t){console.log("finished putting "+e.title+" in database with window"+e.linkedWindowId)})),o.setState({bookshelf:a})},o.addBook=function(e){var t=e.linkedWindowId,n=o.state.bookshelf.map((function(e,n,r){return $(e,t,o.props.user.uid).then((function(){})),e}));V(e,o.props.user.uid).then((function(t){o.setState((function(t){return{linkedBook:e.key,bookshelf:[].concat(Object(p.a)(n),[e]),addingBook:!1}})),console.log("Adding book success!")}))},o.deleteBook=function(e){Y(e,o.props.user.uid).then((function(){var t=o.state.bookshelf.filter((function(t){return t.title!==e.title}));o.setState({bookshelf:t})}))},o.setBooks=function(e){o.setState({bookshelf:e})},o.debugBkShelf=function(){console.log("BookAppMain State is now "+o.state.bookshelf),o.state.bookshelf.map((function(e,t){return console.log("Book ("+e.title+","+e.key+")")}))},o.state={bookshelf:[],addingBook:!1,linkedBook:"",urlsForLaunch:[],urlsForWormhole:[]},o}return Object(c.a)(n,[{key:"handleMessage",value:function(e,t,n){var o=this;if(null!=e.urlsForLaunch){console.log("App.js got launch urls from background");var r=this.state.bookshelf.map((function(t){return t.linkedWindowId===e.winId&&(t.Launch=e.urlsForLaunch,J(t,o.props.user.uid).then((function(){return console.log("launch in db successfully updated")}))),t}));console.log("updating books after launch: "),console.log(r),this.setState({bookshelf:r,urlsForLaunch:e.urlsForLaunch})}if(null!=e.urlsForWormhole){console.log("App.js got launch wormhole from background");var a=this.state.bookshelf.map((function(t){return t.linkedWindowId===e.winId&&(t.WormHole=e.urlsForWormhole,J(t,o.props.user.uid).then((function(){return console.log("wormhole in db successfully updated")}))),t}));console.log("updating books after Wormhole: "),console.log(a),this.setState({bookshelf:a,urlsForWormhole:e.urlsForWormhole})}console.log(this.state.bookshelf)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(K.a,{keyName:"shift+a",onKeyUp:this.toggleAddBook}),r.a.createElement("div",{className:"main-container-center"},r.a.createElement("div",{id:"blurrable",className:"book-shelf"},r.a.createElement(G,{books:this.state.bookshelf,setBooks:this.setBooks,isBlurred:this.state.addingBook}),r.a.createElement("div",{className:this.state.addingBook?"blur-bg":"clear-bg"},r.a.createElement(I,{bks:this.state.bookshelf,updateBook:this.updateBook,deleteBook:this.deleteBook}))),this.state.addingBook?r.a.createElement("div",null,r.a.createElement(_,{addBook:this.addBook,closePopup:this.toggleAddBook,bks:this.state.bookshelf,urlsForLaunch:this.state.urlsForLaunch,urlsForWormhole:this.state.urlsForWormhole})):r.a.createElement("div",null),r.a.createElement("button",{className:"add-bk-btn",onClick:this.toggleAddBook},r.a.createElement("h2",null,"+"))))}}]),n}(o.Component),Z=n(27),ee=n(32),te=function(){var e=Object(o.useState)(""),t=Object(ee.a)(e,2),n=t[0],a=t[1],s=Object(o.useState)(""),l=Object(ee.a)(s,2),c=l[0],i=l[1],u=Object(o.useState)(null),d=Object(ee.a)(u,2),h=d[0],p=d[1],b=function(){var e=Object(f.a)(m.a.mark((function e(t,n,o){var r;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.next=3,v.createUserWithEmailAndPassword(n,o).then(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x(t.user);case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return p("Error Signing up with email and password"),setTimeout((function(){p(null)}),3e3),e}));case 3:return r=e.sent,a(""),i(""),e.abrupt("return",r);case 7:case"end":return e.stop()}}),e)})));return function(t,n,o){return e.apply(this,arguments)}}(),k=function(e){var t=e.currentTarget,n=t.name,o=t.value;"userEmail"===n?a(o):"userPassword"===n&&i(o)};return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Sign Up"),r.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==h&&r.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},h),r.a.createElement("form",{className:""},r.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),r.a.createElement("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:n,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return k(e)}}),r.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),r.a.createElement("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:c,placeholder:"Your Password",id:"userPassword",onChange:function(e){return k(e)}}),r.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){p(null),b(e,n,c).catch((function(e){console.log(e)}))}},"Sign up")),r.a.createElement("p",{className:"text-center my-3"},"or"),r.a.createElement("button",{onClick:function(){try{y()}catch(h){console.error("Error signing in with Google",h)}},className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white"},"Sign In with Google"),r.a.createElement("p",{className:"text-center my-3"},"Already have an account?"," ",r.a.createElement(Z.Link,{component:oe,className:"text-blue-500 hover:text-blue-600"},"Sign in here")," ")))},ne=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).onChangeHandler=function(e){var t=e.currentTarget,n=t.name,r=t.value;"userEmail"===n&&o.setState({email:r})},o.sendResetEmail=function(e){e.preventDefault(),v.sendPasswordResetEmail(o.state.email).then((function(){o.setState({emailHasBeenSent:!0}),setTimeout((function(){o.setState({emailHasBeenSent:!1})}),3e3)})).catch((function(){o.setState({error:"Error resetting password"})}))},o.state={email:"",emailHasBeenSent:!1,error:null},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-xl text-center font-bold mb-3"},"Reset your Password"),r.a.createElement("div",{className:"border border-blue-300 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},r.a.createElement("form",{action:""},this.state.emailHasBeenSent&&r.a.createElement("div",{className:"py-3 bg-green-400 w-full text-white text-center mb-3"},"An email has been sent to you!"),null!==this.state.error&&r.a.createElement("div",{className:"py-3 bg-red-600 w-full text-white text-center mb-3"},this.state.error),r.a.createElement("label",{htmlFor:"userEmail",className:"w-full block"},"Email:"),r.a.createElement("input",{type:"email",name:"userEmail",id:"userEmail",value:this.state.email,placeholder:"Input your email",onChange:this.onChangeHandler,className:"mb-3 w-full px-1 py-2"}),r.a.createElement("button",{className:"w-full bg-blue-400 text-white py-3",onClick:function(t){e.setState({error:null}),e.sendResetEmail(t)}},"Send me a reset link")),r.a.createElement(Z.Link,{component:oe,className:"my-2 text-blue-700 hover:text-blue-800 text-center block"},"\u2190 back to sign in page")))}}]),n}(o.Component),oe=function(){var e=Object(o.useState)(""),t=Object(ee.a)(e,2),n=t[0],a=t[1],s=Object(o.useState)(""),l=Object(ee.a)(s,2),c=l[0],i=l[1],u=Object(o.useState)(null),d=Object(ee.a)(u,2),h=d[0],m=d[1],p=function(e){var t=e.currentTarget,n=t.name,o=t.value;"userEmail"===n?a(o):"userPassword"===n&&i(o)};return r.a.createElement("div",{className:"mt-8"},r.a.createElement("h1",{className:"text-3xl mb-2 text-center font-bold"},"Sign In"),r.a.createElement("div",{className:"border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8"},null!==h&&r.a.createElement("div",{className:"py-4 bg-red-600 w-full text-white text-center mb-3"},h),r.a.createElement("form",{className:""},r.a.createElement("label",{htmlFor:"userEmail",className:"block"},"Email:"),r.a.createElement("input",{type:"email",className:"my-1 p-1 w-full",name:"userEmail",value:n,placeholder:"E.g: faruq123@gmail.com",id:"userEmail",onChange:function(e){return p(e)}}),r.a.createElement("label",{htmlFor:"userPassword",className:"block"},"Password:"),r.a.createElement("input",{type:"password",className:"mt-1 mb-3 p-1 w-full",name:"userPassword",value:c,placeholder:"Your Password",id:"userPassword",onChange:function(e){return p(e)}}),r.a.createElement("button",{className:"bg-green-400 hover:bg-green-500 w-full py-2 text-white",onClick:function(e){!function(e,t,n){e.preventDefault(),v.signInWithEmailAndPassword(t,n).catch((function(e){m("Error signing in with password and email!"),console.error("Error signing in with password and email",e)}))}(e,n,c)}},"Sign in")),r.a.createElement("p",{className:"text-center my-3"},"or"),r.a.createElement("button",{className:"bg-red-500 hover:bg-red-600 w-full py-2 text-white",onClick:function(){y()}},"Sign in with Google"),r.a.createElement("p",{className:"text-center my-3"},"Don't have an account?"," ",r.a.createElement(Z.Link,{component:te,className:"text-blue-500 hover:text-blue-600"},"Sign up here")," ",r.a.createElement("br",null)," ",r.a.createElement(Z.Link,{component:ne,className:"text-blue-500 hover:text-blue-600"},"Forgot Password?"))))},re=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).componentDidMount=Object(f.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v.onAuthStateChanged(function(){var e=Object(f.a)(m.a.mark((function e(t){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=3;break}return e.next=3,X(t.uid).then(function(){var e=Object(f.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(n),e.t0=o,e.next=4,x(t);case 4:e.t1=e.sent,e.t2=Object(p.a)(n),e.t3={user:e.t1,books:e.t2},e.t0.setState.call(e.t0,e.t3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),(function(e){return console.log(e)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());case 2:case"end":return e.stop()}}),e)}))),o.state={user:null,books:[]},o}return Object(c.a)(n,[{key:"render",value:function(){var e=this;return this.state.user?r.a.createElement("div",{className:"users_portfolio_homepage"},r.a.createElement("h1",{className:"ph_title"},"BookWorm"),r.a.createElement(Q,{user:this.state.user,books:this.state.books}),r.a.createElement("button",{className:"w-full py-3 bg-red-600 mt-4 text-white",onClick:function(){v.signOut().then((function(){console.log("Logged out successful"),e.setState({user:null})}),(function(e){console.log("log out unsuccessful"),console.log(e)}))}},"Sign out")):r.a.createElement(Z.Router,null,r.a.createElement(oe,null))}}]),n}(o.Component),ae=n(139),se=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).handleChangeComplete=function(e){o.setState({background:e.hex}),document.body.style.backgroundColor=e.hex},o.toggleColor=function(){o.setState({showColorPicker:!o.state.showColorPicker})},o.state={background:"#fff176",showColorPicker:!1},o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#fff176"}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.toggleColor},"Change Background Color"),this.state.showColorPicker?r.a.createElement(ae.SketchPicker,{color:this.state.background,onChangeComplete:this.handleChangeComplete}):r.a.createElement("div",null))}}]),n}(o.Component),le=function(e){Object(u.a)(n,e);var t=Object(d.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e))._cbForLaunchResponse=function(e){o.setState({urlsForLaunch:e.urlsForLaunch})},o._cbForWormholeResponse=function(e){o.setState({urlsForWormhole:e.urlsForWormhole})},o.state={linkedBook:"",urlsForLaunch:[],urlsForWormhole:[]},o.handleMessage.bind(Object(i.a)(o)),o}return Object(c.a)(n,[{key:"componentDidMount",value:function(){}},{key:"handleMessage",value:function(e,t,n){null!=e.urlsForLaunch&&this.setState({urlsForLaunch:e.urlsForLaunch}),null!=e.urlsForWormhole&&this.setState({urlsForWormhole:e.urlsForWormhole})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(re,null),r.a.createElement("h2",null,"URLs for Wormhole"),r.a.createElement("ul",null,this.state.urlsForWormhole.map((function(e){return r.a.createElement("li",null,e)}))),r.a.createElement("h2",null,"URLs for Launch"),r.a.createElement("ul",null,this.state.urlsForLaunch.map((function(e){return r.a.createElement("li",null,e)}))),r.a.createElement(se,null))}}]),n}(o.Component);n(347),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(le,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},42:function(e,t,n){},94:function(e,t,n){}},[[142,1,2]]]);
//# sourceMappingURL=main.e068cdee.chunk.js.map