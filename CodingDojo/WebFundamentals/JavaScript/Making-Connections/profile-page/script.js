console.log("page loaded...");
var nameChange = document.querySelector("#nameChange");

function changeName() {
    nameChange.innerText = "Harry Potter";
}

function removeUser() {
    var user = document.querySelector("#user1")
    user.remove();
}

function removeUser2() {
    var user = document.querySelector("#user2")
    user.remove();
}

function connectDecrease() {
    var myRequest = document.querySelector("#connectRequest");
    var count = myRequest.innerText;
    count --;
    myRequest.innerText = count;
}

function addConnections() {
    var myConnect = document.querySelector("#myConnections");
    var count = myConnect.innerText;
    count++;
    myConnect.innerText = count;
}