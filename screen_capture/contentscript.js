var regex = /abc/;

if (regex.test(document.body.innerText)){
    chrome.extension.sendRequest("reqest message", function(response_str){
        alert(response_str);
    });
}