

console.log("Client script loaded.");

function ajaxGET(path, callback) {
    // Document is loaded now so go and fetch a resource.
    const xhr = new XMLHttpRequest();
    xhr.onload = function() {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
            callback(this.responseText);
            // this won't work ... discuss!!!
            //return this.responseText;
        }
    }
    xhr.open("GET", path);
    xhr.send();
}

//////////////////////////////////
// YOU CAN CHANGE THE PATH, BUT
// YOU MUST CHANGE IT IN INDEX.JS
//////////////////////////////////
ajaxGET("/data/newsfeed", function(data) {
    // this does!
    //console.log(data);
    document.getElementById("newsfeed").innerHTML = data;
});


document.querySelector("#click4NewsFeed").addEventListener("click", function(e) {
    e.preventDefault();

    ajaxGET("/data/newsfeed", function(data) {
        // this does!
        //console.log(data);
        document.getElementById("newsfeed2").innerHTML = data;
    });

}, false);
