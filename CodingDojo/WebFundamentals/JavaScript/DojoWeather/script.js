var celsiusOrFahrenheit = document.getElementsByClassName("temp");
var unitsOfTemperature = document.querySelector("#temperatureUnits");
var array = [];

function removeBox() {
    var user = document.querySelector("#cookieBox")
    user.remove();
}

function changeTemps (element) {
    for(i = 0; i < celsiusOrFahrenheit.length; i++) {
        console.log(celsiusOrFahrenheit[i].innerText)
        array.push(celsiusOrFahrenheit[i].innerText)
        }
    for (i = 0; i < celsiusOrFahrenheit.length; i++){
        if (element.value === "Fahrenheit") {
            celsiusOrFahrenheit[i].innerText = Math.round((parseInt(celsiusOrFahrenheit[i].innerText) * 9/5)+ 32);
        }
        else if (element.value === "celsius") {
            celsiusOrFahrenheit[i].innerText = Math.round((parseInt(celsiusOrFahrenheit[i].innerText) - 32) * 5/9);
        }
    }
        return array;
    }
