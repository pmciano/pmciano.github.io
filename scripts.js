/*---------------------------------------------------------
 Random Footer Quote
-------------------------------------------------------- */
// Create quotes list
var quoteList = [
  // freedom 0
  "The freedom to run a program as you wish, for any purpose.",
  // freedom 1
  "The freedom to study how a program works and change it, so that it does your computing as you wish.", 
  // freedom 2
  "The freedom to redistribute copies, so that you can help others.",
  // freedom 3
  "The freedom to distribute copies of your modified versions to others, so that the whole community has a chance to benefit from your changes."
];

// Determine number of quotes
var numOfQuotes = Object.keys(quoteList).length;

// Generate a random number from 1 through numOfQuotes
var bigDecimal = Math.random();
var improvedNum = (bigDecimal * numOfQuotes);

// Round random number down
var randomNum = Math.floor(improvedNum);

// Choose random quote based on random number generated
document.getElementById("quote_text").innerHTML = 
  quoteList[randomNum];