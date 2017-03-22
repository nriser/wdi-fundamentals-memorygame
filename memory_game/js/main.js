var cards = [
	{
		rank: "queen",
		suit: "hearts",
		cardImage: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamonds",
		cardImage: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		cardImage: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		cardImage: "images/king-of-diamonds.png"
	}
];

var cardsInPlay = []; // hold the cards that are in play

// Display score
var score = document.createElement("p");
document.getElementById("score").appendChild(score);
score.innerHTML = "Score: 0";
var addScore = 0;


var checkForMatch = function() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
		alert("You found a match!");
		// add score
		addScore ++;
		// display accumulated score
		score.innerHTML = "Score: " + addScore;
	} else {
		alert("Sorry, try again.");
	}
};

var flipCard = function() {
	var cardId = this.getAttribute("data-id");
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);
	console.log(cards[cardId].cardImage);
	console.log(cards[cardId].suit);

	this.setAttribute("src", cards[cardId].cardImage);

	if (cardsInPlay.length === 2) {
		checkForMatch();
		cardsInPlay = [];
	}
};

var createBoard = function() {
	for (var i = 0; i < cards.length; i++) {
		var cardElement = document.createElement("img");
		cardElement.setAttribute("src", "images/back.png");
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener("click", flipCard); //
		document.getElementById("game-board").appendChild(cardElement);
	}
};

createBoard();

var reset = function() {
	var images = document.getElementsByTagName("img");
	
	for (var i = 0; i < images.length; i++) {
		images[i].removeAttribute("src");
		images[i].setAttribute("src", "images/back.png");
	}
};

var clickButton = function() {
	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", reset);
};

clickButton();
