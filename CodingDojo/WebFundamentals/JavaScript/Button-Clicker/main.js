function clickLogin(element) {
    if (element.innerText == "Login") {
        element.innerText = "Logout";
    }
    else if (element.innerText === "Logout") {
        element.innerText = "Login";
    }
}
clickLogin();

function hideButton (element) {
    element.remove();
}
hideButton();
