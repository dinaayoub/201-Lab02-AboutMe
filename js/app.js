'use strict'

//Ask the user for their name
var userName = prompt('Hello and welcome to my About Me page. What is your name?');
//console.log('User name: ' + userName);
alert('Hi, ' + userName + '. Let\'s play a guessing game!');

//declare variables to keep track of the user's score. 
var countOfCorrectAnswers = 0;
var countOfUnrecognizedAnswers = 0;
var countOfIncorrectAnswers = 0;

//Ask the first question
var answer1 = prompt('Here\'s your first question: am I 25 years old?');
answer1 = answer1.toLowerCase();

if (answer1 === 'no' || answer1 === 'n') {
    //The user answered correctly
    //console.log('User\'s answer to question #1: ' + answer1 + ' - correct!');
    alert('You said: ' + answer1 + ', and that is correct! Good guess.');
    countOfCorrectAnswers++;
} else if (answer1 === 'yes' || answer1 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #1: ' + answer1 + ' - incorrect!');
    alert('You said: ' + answer1 + ', but that is not correct :-( Nice try, though.');
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

if (answer2 === 'no' || answer2 === 'n') {
    //The user answered correctly
    //console.log('User\'s answer to question #2: ' + answer2 + ' - correct!');
    alert('You said: ' + answer2 + ', and that is correct! Good guess.');
    countOfCorrectAnswers++;
} else if (answer2 === 'yes' || answer2 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #2: ' + answer2 + ' - incorrect!');
    alert('You said: ' + answer2 + ', but that is not correct :-( Nice try, though.');
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

if (answer3 === 'no' || answer3 === 'n') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #3: ' + answer3 + ' - incorrect!');
    alert('You said: ' + answer3 + ', but that is not correct :-( Nice try, though.');
    countOfIncorrectAnswers++;
} else if (answer3 === 'yes' || answer3 === 'y') {
    //The user answered correctly
    //console.log('User\'s answer to question #3: ' + answer3 + ' - correct!');
    alert('You said: ' + answer3 + ', and that is correct! Good guess.');
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

if (answer4 === 'no' || answer4 === 'n') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #4: ' + answer4 + ' - incorrect!');
    alert('You said: ' + answer4 + ', but that is not correct :-( Nice try, though.');
    countOfIncorrectAnswers++;
} else if (answer4 === 'yes' || answer4 === 'y') {
    //The user answered correctly
    //console.log('User\'s answer to question #4: ' + answer4 + ' - correct!');
    alert('You said: ' + answer4 + ', and that is correct! Good guess.');
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

if (answer5 === 'no' || answer5 === 'n') {
    //The user answered correctly
    //console.log('User\'s answer to question #5: ' + answer5 + ' - correct!');
    alert('You said: ' + answer5 + ', and that is correct! Good guess.');
    countOfCorrectAnswers++;
} else if (answer5 === 'yes' || answer5 === 'y') {
    //The user answered incorrectly
    //console.log('User\'s answer to question #5: ' + answer5 + ' - incorrect!');
    alert('You said: ' + answer5 + ', but that is not correct :-( Nice try, though.');
    countOfIncorrectAnswers++;
} else {
    //The user gave an answer that is neither yes/no nor y/n. 
    //console.log('User\'s answer to question #5: ' + answer5 + ' - not recognized!');
    alert('You said: ' + answer5 + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
}

//Ask the sixth question

var answer6 = 0;
var i = 0;
var correctAnswer = 16;
var maxGuesses = 4;

while (answer6 != correctAnswer && i < maxGuesses) {
    answer6 = prompt('How many countries have I been to? You have ' + (maxGuesses - i) + ' of ' + maxGuesses + ' guesses left.');

    if (answer6 == correctAnswer) {
        //console.log('Hurray! The user answered ' + answer6 + ' and that is correct! It took them ' + (i + 1) + ' guesses to get it right.');
        alert('Hurray! you answered ' + answer6 + ' and that is correct! It took you ' + (i + 1) + ' guesses to get it right.');
        countOfCorrectAnswers++;
    } else if (answer6 > correctAnswer) {
        console.log('The user answered ' + answer6 + ' and that is too high! This was guess number ' + (i + 1) + '.');
        alert('You answered ' + answer6 + ' and that is too high! This was guess number ' + (i + 1) + '.');
        i++;
    } else if (answer6 < correctAnswer) {
        console.log('The user answered ' + answer6 + ' and that is too low! This was guess number ' + (i + 1) + '.');
        alert('You answered ' + answer6 + ' and that is too low! This was guess number ' + (i + 1) + '.');
        i++;
    } else {
        console.log('I don\'t understand the user\'s  answer: ' + answer6 +'. This was guess number ' + (i + 1) + '.');
        alert('I don\'t understand that answer: ' + answer6 + '. Please enter numbers only! This was guess number ' + (i + 1) + '.');
        i++;
    }

    if (i === maxGuesses) {
        //the user did not figure it out. 
        alert('I\'m sorry, that was all of your guesses! The correct number is ' + correctAnswer + '.');
        countOfIncorrectAnswers++;
        i = maxGuesses;
    }
}


//Ask the seventh question 
var tenFavoriteCities = new Array('paris', 'prague', 'new york', 'sydney', 'rio de janeiro', 'vancouver', 'florence', 'london', 'cairo', 'seattle');

var guesses = 0;
var maxNumberOfGuesses = 6;
var isCorrectAnswer = false;

//Give the user 6 chances to get it right. Once they do get it right or guess the max number of times, stop looping.
while (!isCorrectAnswer && guesses < maxNumberOfGuesses) {
    //ask the user
    var answer7 = prompt('Name one of my favorite cities.');

    //iterate on the array to check whether the user got one of the correct answers
    for (var i = 0; i < tenFavoriteCities.length; i++) {
        if (answer7.toLowerCase() === tenFavoriteCities[i]) {
            //if the user got a correct answer, we want to alert them they're right 
            alert('That is correct!');
            //Set our global variable to true so we know *outside* of these loops that the user got the correct answer
            isCorrectAnswer = true;
            //increment the number of correct answers 
            countOfCorrectAnswers++;
            //break out of the for loop
            break;
        } else if (i === tenFavoriteCities.length - 1) {
            //the user did not get the right answer even after looping through all array items, let them know. 
            alert('Sorry, that is not one of my favorite cities :(');
        }
    }
    guesses++;
}

//if we've finished looping and the user still hasn't guessed correctly, let them know they're out of guesses. 
if (!isCorrectAnswer) {
    
    alert('I\m sorry, that was all of your guesses.');
    //increment incorrect answers.
    countOfIncorrectAnswers++;
}

//create a string with the name of all the cities in the array. 
var cities = '';
//iterate over the array to concatenate the name of each city
for (var i=0; i<tenFavoriteCities.length; i++){
        cities+=tenFavoriteCities[i] + ', ';
}
//now we have the whole list of cities, display it to the user. 
alert('The correct answers were: ' + cities);

// This is just to determine whether to use the word answer (singular) or answers (plural)
// entirely unnecessary, just for more practice. 
var pluralCorrectAnswers = '';
var pluralIncorrectAnswers = '';
var pluralUnrecognizedAnswers = '';
if (countOfCorrectAnswers !== 1) {
    pluralCorrectAnswers = 's';
}
if (countOfIncorrectAnswers !== 1) {
    pluralIncorrectAnswers = 's';
}
if (countOfUnrecognizedAnswers !== 1) {
    pluralUnrecognizedAnswers = 's';
}

alert('Thank you for playing, ' + userName + '. You had ' + countOfCorrectAnswers + ' correct answer' + pluralCorrectAnswers + ', ' +
    countOfIncorrectAnswers + ' incorrect answer' + pluralIncorrectAnswers + ', and '
    + countOfUnrecognizedAnswers + ' unrecognized answer' + pluralUnrecognizedAnswers + '.');