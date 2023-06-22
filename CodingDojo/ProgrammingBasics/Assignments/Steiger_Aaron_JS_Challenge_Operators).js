//creating a function to determine how many pieces of cake are going to be left over
function howMuchCakeLeftOver (numberOfPeople,numberOfPieces) {

//creating variables to determine how many people there are and how many pieces of cake there is.
    var numberOfPeople = 5;
    var numberOfPieces = 12;

//creating statement that uses modulo to determine amount of remainder cake and prints it to the console. 
    cakeLeftOver = numberOfPieces % numberOfPeople;
    console.log(cakeLeftOver);
//adding if statement to function to determine what the computer should say back to the user based on how many pieces are left
    if (cakeLeftOver == 0){
        console.log("No leftovers for you!");
    }
    else if(cakeLeftOver <= 2 && cakeLeftOver != 0){
        console.log("You have some leftovers");
    }
    else if (cakeLeftOver >= 3 && cakeLeftOver <= 5) {
        console.log("You have leftovers to share");
    }
    else {
        console.log("Hold another party!");
    }
//returning the results of cakeLeftOver
    return cakeLeftOver;
}
//calling the function and printing the results
howMuchCakeLeftOver();
