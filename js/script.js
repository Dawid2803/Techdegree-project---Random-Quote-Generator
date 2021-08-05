/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
	{ quote: "I nearly had Everything!" , source: "Thomas Shelby", citation: "Peaky Blinders" },	
	{ quote: "The journey of a thousand miles begins with one step.", source: "Lao Tzu", year: 2020 },
	{ quote: "Never let the fear of striking out keep you from playing the game.", source: "Babe Ruth"},
	{ quote: "Strive not to be a success, but rather to be of value.", source: "Albert Einstein"},
	{ quote: "Those who dare to fail miserably can achieve greatly.", source: "John F. Kennedy"},
]

/***
 * `getRandomQuote` function
***/ 
function getRandomQuote(quoteArray){
	let randomNumber = Math.floor(Math.random() * quoteArray.length);
	console.log(randomNumber);
	return quoteArray[randomNumber];
	console.log(quoteArray[randomNumber]);

}

console.log(getRandomQuote(quotes));

/***
 * `printQuote` function
***/
function printQuote(){
	let randomquote = getRandomQuote(quotes);
	let quoteToHTML = `
	<p>${randomquote.quote}</p>
	<p>${randomquote.source}`;
	if (randomquote.citation){
		randomquote += `<span>${randomquote.citation}</span>`;
		}
	if(randomquote.year){
		randomquote += `<span>${randomquote.year}</span>`;
	}
	randomquote += `</p>`;
	return document.getElementById('quote-box').innerHTML = quoteToHTML;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);