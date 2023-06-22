function greetingChallenge(name, timeOfDay){
    if (name != "Dooku") {
        console.log("Good day " + name);
        console.log("The time is " + timeOfDay);
    }
    else {
        console.log("Im coming for you Dooku!");
        console.log("The time is " + timeOfDay);
    }
    return(name, timeOfDay);
}
greetingChallenge("Dooku", "10:30 P.M.")