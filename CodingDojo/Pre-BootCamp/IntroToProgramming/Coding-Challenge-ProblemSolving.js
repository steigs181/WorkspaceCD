/*
User Story: 
    A computer application needs to be able to identify if a written paragraph is written in First, Second, Or Third Person.
Using comments, write out 1 strategy that could be used to solve the problem.
Using comments, create pseudocode (an informal but readable description of code that uses regular language to outline a solution) to apply one of the strategies to solve the problem.
Using comments, write a short paragraph that answers: What is the hardest part of problem-solving
    */

/*
To determine what view the writer of the page is talking in we can write a program that iterates through the paper, comparing the string of characters in between empty spaces to 
values stored in three different arrays, these arrays will house the pronouns that are seen in each perspective viewpoint ex you, i, and myself in first person. If any of the values match the string on the paper
the computer will add to a counter for that perspective view point there will be three of these variables firstPerson, secondPerson, and thirdPerson. the computer will then compare these counters at the end and see which has the highest count
determining what view point the page is written in. 
*/

//Create a function to iterate through the page and determine if it is written in first, second, or third person
//Create three variables these variables will be used to store a count.
//Create three more variables all arrays that store pronouns that would be used in first person, second person, and third person view points of writing. 
//Create a for loop that will iterate through the paper and have it call upon another function to compare the values to that of which are in the arrays.
//Create a new function that will compare the string values between white spaces, to the values stored in all three of the arrays. storing a counter in one of the three variables if it matches
//Create an if statement that will determine which of the three variables has the highest count at the end. This will determine what view the paper is written in.
//return that value and print it to the console
//call upon the main function and it execute it to review the page. 

/*
Problem solving is something that we do constantly in our every day lives. From the day we are born, challenges are presented to us in a variety of different ways.
Sometimes these problems are easy to solve and others offer quite challenge. I find that the hardest part about problem solving is trying to separate myself from the problem.
Being a perfectionist I always want the best answer that offers the quickest, most simple, and elegant way possible. Understanding that there is more than one answer to a problem
and that it doesn't need to be perfect the first time is something I struggle with. Being able to take yourself out of the equation and think outside the box can help tremendously.



*/