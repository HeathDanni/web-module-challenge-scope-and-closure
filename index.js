// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
// function processFirstItem(stringList, callback) {
//   return callback(stringList[0])
// }

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 *  
 *    In counter1 the variable 'count' is inside the function. In counter2 'count' is global.

 * 
 * 2. Which of the two uses a closure? How can you tell?
 *  
 * 
 *    counter1 uses a closure.  I can tell because 'count' is declared inside the function which closes it from the global object.

 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
  
 *     counter1 would be preferable if you didn't want 'count' to be accessed or changed outside of the function.  counter2 would be preferable if need it to be a global variable that could be changed by other functions.
*/

// counter1 code
// function counterMaker() {
//   let count = 0;
//   return function counter() {
//    return count++;
//   }
// }


// const counter1 = counterMaker();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());

// // // counter2 code
// let count = 0;

// function counter2() {
//   return count++;
// }

// console.log(counter2());
// console.log(counter2());
// console.log(counter2());

/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

const inning = function()
{

return Math.floor(Math.random() * 3);

}

// console.log(inning());

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

// function finalScore(func, numInnings){

//   let homeScore = 0;
//   let awayScore = 0;

//   for (let i = numInnings; i > 0; i--) {
//     homeScore += func();
//   } 

//   for (let i = numInnings; i > 0; i--) {
//     awayScore += func();
//   } 
  
//   return {"Home": homeScore, "Away": awayScore};


// }

// console.log(finalScore(inning, 5));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */

const getInningScore = function(inningNum, awayTeam, homeTeam) {
  let str = "";
  let inningStr = inningNum.toString();

  if (inningStr[inningStr.length-1] === '1') {
    str = "st inning";
    } else if (inningStr[inningStr.length-1] === '2'){
      str = "nd inning";
     } else if (inningStr[inningStr.length-1] === '3') {
       str = "rd inning";
    } else if (inningStr === "") {
      str = "Final Score";
    } else {
      str = "th inning";
    }

  return `${inningNum}${str}: ${awayTeam} - ${homeTeam}`;
}

// console.log(getInningScore(83, 4, 5));

function scoreboard(func1, func2, num) {
 let awayTeam = 0;
 let homeTeam = 0;
 let string = [];
 
 for (let i = 0; i < num; i++) {
    awayTeam += func2();
    homeTeam += func2();
    let finalInning = "";

    if (i+1 === num) {
      string += (`${func1(finalInning, awayTeam, homeTeam)}\n`);
    } else {
      string += (`${func1(i+1, awayTeam, homeTeam)}\n`);
  }
  
 } return string;
 }


console.log(scoreboard(getInningScore, inning, 4));