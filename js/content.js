deepai.setApiKey('ae158c0c-821b-4319-934e-b8556ee36e39');

function summarize(text) {
    return deepai.callStandardApi("summarization", {
        text: text
    }).then(function (result) {
        return result.output;
    }).catch(function (error) {
        console.log(error);
        return error;
    });
}

function summarier() {//turns paragraphs into summary
    console.log("calling summarize");
    let paragraphs = document.getElementsByTagName('p');
    let summaries = JSON.parse(JSON.stringify(paragraphs));
    for (let i = 0; i < paragraphs.length; ++i){
        summarize(summaries[i].innerHTML).then(function (result){
            console.log(result);
            paragraphs[i].innerHTML = result;
        })
    }
}

function set_phase(string) {
    chrome.storage.local.set({'phase': string}, function () {
        console.log('phase is set to ' + string);
    });
}

//BELOW ARE TWO DIFFERENT WAYS TO CHANGE THE THINGS WITHIN A PARAGRAPH TEXT
function censor_paragraph() {
    let elts = document.getElementsByTagName('p');
    for (let i = 0; i < elts.length; i++) {
        elts[i].style.backgroundColor = 'black';
    }

    let subheaders = document.getElementsByTagName('strong');
    for (let i = 0; i < subheaders.length; i++) {
        subheaders[i].style.backgroundColor = 'white';
    }
}

function uncensor_paragraph() {
    let elts = document.getElementsByTagName('p');
    for (let i = 0; i < elts.length; i++) {
        elts[i].style.backgroundColor = 'white';
    }
}

// Callback for when a message is received from background script
function gotMessage(request, sender, sendResponse) {
    if (request === "active") {
        summarier();
        collapse_paragraph();
        set_phase("active");
    }
    else if (request === "original"){
        set_phase("original");
        unloadCSS("css/collapsible.css");
    }
    console.log('because of asynchronous method, this comes up first');
}

function loadCSS(file) {
    let link = document.createElement("link");
    link.href = chrome.extension.getURL(file);
    link.id = file;
    link.type = "text/css";
    link.rel = "stylesheet";
    document.getElementsByTagName("html")[0].appendChild(link);
}


function unloadCSS(file) {
    let cssNode = document.getElementById(file);
    cssNode && cssNode.parentNode.removeChild(cssNode);
}

function collapse_paragraph() {
    loadCSS("css/collapsible.css");
    let coll = document.querySelectorAll('h1,h2,h3,h4,h5,h6,strong');
    console.log(coll);
    for (let i = 0; i < coll.length; i++) {
        coll[i].classList.add("active");
        coll[i].addEventListener("click", function () {
            let paragraphs = this.nextElementSibling;
            if (paragraphs.style.maxHeight) {
                paragraphs.style.maxHeight = null;
            } else {
                paragraphs.style.maxHeight = paragraphs.scrollHeight + "px";
            }
        })
    }
}

chrome.runtime.onMessage.addListener(gotMessage);

set_phase('original');
