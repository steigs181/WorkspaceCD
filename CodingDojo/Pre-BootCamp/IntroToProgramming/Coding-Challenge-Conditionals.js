//create a function that converts standard time to military time
//create a function that determines based on the time of the day, as well as what day it is the type of treat given 
//creating a function that figures out what type treat to give based on time of day and if homework is done
function treatMyself(timeOfDay, homeWorkDone, dayOfWeek) {
var typeOfTreat = " ";
let treatsEven = ["ice cream", "cookies", "candy"];
let treatsOdd = ["hot chocolate", "tea", "cake"];
    if (homeWorkDone == true && timeOfDay > 0 && timeOfDay < 10) {
        typeOfTreat = "I want a latte"
    }
    else if (timeOfDay >= 10 && timeOfDay < 15 && homeWorkDone == true) {
        typeOfTreat = "I want Hot Chocolate!";
    }
    else if (timeOfDay >= 15 && timeOfDay <= 18){
        if(timeOfDay % 2 == 0) { 
            typeOfTreat = "I want " + treatsEven[Math.floor(Math.random() * treatsEven.length)]
            if (typeOfTreat == ("I want " + treatsEven[0])) {
                typeOfTreat = "I want " + treatsEven[0] + typeOfIceCream(dayOfWeek);
            }

        }
        else {
            typeOfTreat = "I want " + treatsOdd[Math.floor(Math.random() * treatsOdd.length)];
        }

    }
    else if (timeOfDay > 18 && timeOfDay < 22 && homeWorkDone == true) {
        typeOfTreat = "I want ice cream!" + typeOfIceCream(dayOfWeek);
    }
    else if (timeOfDay >= 22 && timeOfDay <= 24 && homeWorkDone == true) {
        typeOfTreat = "I don't want anything other than sleep!"
    }
    console.log(standardTime(timeOfDay));
    console.log(typeOfTreat);
    return typeOfTreat;
}
treatMyself(16, true, "Wednesday");

//create a function to convert universal time to standard time to print to the console.
function standardTime (timeOfDay) {
    let timeConversion = timeOfDay;
    let MorningOrNight = timeConversion >= 12 ? "PM" : "AM";
    timeConversion = (timeConversion % 12) || 12;
    finalTime = timeConversion + " " + MorningOrNight;
    return finalTime
}

//function to determine what type of ice cream will be eaten based on day
function typeOfIceCream(dayOfWeek) {
    let iceCreamFlavor = null;
    if(dayOfWeek == "Wednesday") {
        iceCreamFlavor = " , I want strawberry";
    }
    else {
        iceCreamFlavor = " , I want vanilla";
    }
    return iceCreamFlavor;
}
