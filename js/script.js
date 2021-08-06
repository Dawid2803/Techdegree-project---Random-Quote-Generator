/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
	The quotes array consists of different objects along with their properties.
***/
const quotes = [
	{ quote: "I nearly had Everything!" , source: "Thomas Shelby", citation: "Peaky Blinders" },	
	{ quote: "The journey of a thousand miles begins with one step.", source: "Lao Tzu", year: 2020 },
	{ quote: "Never let the fear of striking out keep you from playing the game.", source: "Babe Ruth"},
	{ quote: "Strive not to be a success, but rather to be of value.", source: "Albert Einstein", tag: "Smartest man to have lived"},
	{ quote: "Those who dare to fail miserably can achieve greatly.", source: "John F. Kennedy"},
]

/***
 * `getRandomQuote` function
	This function will use a random number to pick one of the quotes available in the quotes array.
***/ 
function getRandomQuote(quoteArray){
	let randomNumber = Math.floor(Math.random() * quoteArray.length);
	return quoteArray[randomNumber];

}


/***
 * `printQuote` function
	This function will print the randomly chosen quote to the screen.
***/
function printQuote(){
	let randomquote = getRandomQuote(quotes);
	let quoteToHTML = `
	<p class = "quote">${randomquote.quote}</p>
	<p class = "source">${randomquote.source}`;
	if (randomquote.citation){
		quoteToHTML += `<span class = "citation"> ${randomquote.citation}</span>`;
		}
	if(randomquote.year){
		quoteToHTML += `<span class = "year"> ${randomquote.year}</span>`;
	}
	if(randomquote.tag){
		quoteToHTML += `<span class = "tag">, ${randomquote.tag}</span>`;
	}
	quoteToHTML += `</p>`;
	return document.getElementById('quote-box').innerHTML = quoteToHTML;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);