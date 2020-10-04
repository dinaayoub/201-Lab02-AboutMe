'use strict';

//Ask the user for their name
var userName = prompt('Hello and welcome to my About Me page. What is your name?');
alert('Hi, ' + userName + '. Let\'s play a guessing game!');

//declare variables to keep track of the user's score.
var countOfCorrectAnswers = 0;
var countOfUnrecognizedAnswers = 0;
var countOfIncorrectAnswers = 0;

//Ask the first question
function askAQuestion(question, correctAnswer) {
  var userAnswer = prompt(question).toLowerCase();
  var yesAnswers = new Array('y', 'yes');
  var noAnswers = new Array('n', 'no');
  var correctAnswers = new Array('', '');
  var incorrectAnswers = new Array('', '');
  if (correctAnswer) {
    correctAnswers = yesAnswers;
    incorrectAnswers = noAnswers;
  } else {
    correctAnswers = noAnswers;
    incorrectAnswers = yesAnswers;
  }
  if (userAnswer === correctAnswers[0] || userAnswer === correctAnswers[1]) {
    alert('You said: ' + userAnswer + ', that is correct. Good guess.');
    countOfCorrectAnswers++;
  } else if (userAnswer === incorrectAnswers[0] || userAnswer === incorrectAnswers[1]) {
    //The user answered incorrectly
    alert('You said: ' + userAnswer + ', but that is not correct :-( Nice try, though.');
    countOfIncorrectAnswers++;
  } else {
    //The user gave an answer that is neither yes/no nor y/n.
    alert('You said: ' + userAnswer + ', but I didn\'t understand that answer. Please use yes/no or y/n.');
    countOfUnrecognizedAnswers++;
  }
}

//Ask the sixth question
function askSixthQuestion() {
  var answer6 = 0;
  var i = 0;
  var correctAnswer = 16;
  var maxGuesses = 4;

  while (answer6 !== correctAnswer && i < maxGuesses) {
    answer6 = prompt('How many countries have I been to? You have ' + (maxGuesses - i) + ' of ' + maxGuesses + ' guesses left.');

    if (answer6 == correctAnswer) {
      alert('Hurray! you answered ' + answer6 + ' and that is correct! It took you ' + (i + 1) + ' guesses to get it right.');
      countOfCorrectAnswers++;
    } else if (answer6 > correctAnswer) {
      alert('You answered ' + answer6 + ' and that is too high! This was guess number ' + (i + 1) + '.');
      i++;
    } else if (answer6 < correctAnswer) {
      alert('You answered ' + answer6 + ' and that is too low! This was guess number ' + (i + 1) + '.');
      i++;
    } else {
      alert('I don\'t understand that answer: ' + answer6 + '. Please enter numbers only! This was guess number ' + (i + 1) + '.');
      i++;
    }

    if (answer6 != correctAnswer && i === maxGuesses) {
      //the user did not figure it out.
      alert('I\'m sorry, that was all of your guesses! The correct number is ' + correctAnswer + '.');
      countOfIncorrectAnswers++;
    }
  }

}
//Ask the seventh question
function askSeventhQuestion() {

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

    alert('I\'m sorry, that was all of your guesses.');
    //increment incorrect answers.
    countOfIncorrectAnswers++;
  }

  //create a string with the name of all the cities in the array.
  var listOfCities = '';
  //iterate over the array to concatenate the name of each city
  for (var j = 0; j < tenFavoriteCities.length; j++) {
    if (j === tenFavoriteCities.length - 1) {
      listOfCities += tenFavoriteCities[j] + '.';
    }
    else {
      listOfCities += tenFavoriteCities[j] + ', ';
    }
  }
  //now we have the whole list of cities, display it to the user.
  alert('The correct answers were: ' + listOfCities);
}

//Ask the questions
askAQuestion('Here\'s your first question: am I 25 years old?', false);
askAQuestion('Am I a Seattle native?', false);
askAQuestion('Did I ever work in the software industry?', true);
askAQuestion('Did I graduate from The American University in Cairo?', true);
askAQuestion('Do I like to paint in watercolors?', false);
askSixthQuestion();
askSeventhQuestion();

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

alert('Thank you for playing, ' + userName + '. You had ' + countOfCorrectAnswers + ' correct answer' + pluralCorrectAnswers + ', ' + countOfIncorrectAnswers + ' incorrect answer' + pluralIncorrectAnswers + ', and ' + countOfUnrecognizedAnswers + ' unrecognized answer' + pluralUnrecognizedAnswers + '.');
