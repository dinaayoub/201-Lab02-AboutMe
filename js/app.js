'use strict'

//Ask the user for their name
var userName = prompt('Hello and welcome to my About Me page. What is your name?');
//console.log("User name: " + userName);
alert ("Hi, " + userName + ". Let's play a guessing game!"); 

//declare variables to keep track of the user's score. 
var countOfCorrectAnswers = 0;
var countOfUnrecognizedAnswers = 0;
var countOfIncorrectAnswers = 0;

//Ask the first question
var answer1 = prompt('Here\'s your first question: am I 25 years old?');
answer1 = answer1.toLowerCase();

if (answer1 === 'no' || answer1 === 'n'){
    //The user answered correctly
    //console.log('User\'s answer to question #1: ' + answer1 + ' - correct!');
    alert("You said: " + answer1 + ", and that is correct! Good guess.");
    countOfCorrectAnswers++;
} else if (answer1 === 'yes' || answer1 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #1: ' + answer1 + ' - incorrect!');
    alert("You said: " + answer1 + ", but that is not correct :-( Nice try, though.");
    countOfIncorrectAnswers++;
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #1: ' + answer1 + ' - not recognized!');
    alert('You said: ' + answer1 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
}       

//Ask the second question
var answer2 = prompt('Am I a Seattle native?');
answer2 = answer2.toLowerCase();

if (answer2 === 'no' || answer2 === 'n'){
    //The user answered correctly
    //console.log('User\'s answer to question #2: ' + answer2 + ' - correct!');
    alert("You said: " + answer2 + ", and that is correct! Good guess.");
    countOfCorrectAnswers++;
} else if (answer2 === 'yes' || answer2 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #2: ' + answer2 + ' - incorrect!');
    alert("You said: " + answer2 + ", but that is not correct :-( Nice try, though.");
    countOfIncorrectAnswers++;
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #2: ' + answer2 + ' - not recognized!');
    alert('You said: ' + answer2 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
} 

//Ask the third question
var answer3 = prompt('Did I ever work in the software industry?');
answer3 = answer3.toLowerCase();

if (answer3 === 'no' || answer3 === 'n'){
    //The user answered incorrectly
    //console.log('User\'s answer to question #3: ' + answer3 + ' - incorrect!');
    alert("You said: " + answer3 + ", but that is not correct :-( Nice try, though.");
    countOfIncorrectAnswers++;   
} else if (answer3 === 'yes' || answer3 === 'y') {
    //The user answered correctly
    //console.log('User\'s answer to question #3: ' + answer3 + ' - correct!');
    alert("You said: " + answer3 + ", and that is correct! Good guess.");
    countOfCorrectAnswers++;
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #3: ' + answer3 + ' - not recognized!');
    alert('You said: ' + answer3 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
} 

//Ask the fourth question
var answer4 = prompt('Did I graduate from The American University in Cairo?');
answer4 = answer4.toLowerCase();

if (answer4 === 'no' || answer4 === 'n'){
    //The user answered incorrectly
    //console.log('User\'s answer to question #4: ' + answer4 + ' - incorrect!');
    alert("You said: " + answer4 + ", but that is not correct :-( Nice try, though.");
    countOfIncorrectAnswers++;   
} else if (answer4 === 'yes' || answer4 === 'y') {
    //The user answered correctly
    //console.log('User\'s answer to question #4: ' + answer4 + ' - correct!');
    alert("You said: " + answer4 + ", and that is correct! Good guess.");
    countOfCorrectAnswers++;
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #4: ' + answer4 + ' - not recognized!');
    alert('You said: ' + answer4 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
} 

//Ask the fifth question
var answer5 = prompt('Do I like to paint in watercolors?');
answer5 = answer5.toLowerCase();

if (answer5 === 'no' || answer5 === 'n'){
    //The user answered correctly
    //console.log('User\'s answer to question #5: ' + answer5 + ' - correct!');
    alert("You said: " + answer5 + ", and that is correct! Good guess.");
    countOfCorrectAnswers++;
} else if (answer5 === 'yes' || answer5 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #5: ' + answer5 + ' - incorrect!');
    alert("You said: " + answer5 + ", but that is not correct :-( Nice try, though.");
    countOfIncorrectAnswers++;   
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #5: ' + answer5 + ' - not recognized!');
    alert('You said: ' + answer5 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
} 

alert("Thank you for playing, " + userName + ". You had " + countOfCorrectAnswers + " correct answers, " + countOfIncorrectAnswers + " incorrect answers, and " + countOfUnrecognizedAnswers + " unrecognized answers. Thanks for playing!")