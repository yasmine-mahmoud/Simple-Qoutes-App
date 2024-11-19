

var list = [
	{ quote: "“Be yourself; everyone else is already taken.”", author: "― Oscar Wilde" },
	{ quote: "“So many books, so little time.”", author: "― Frank Zappa" },
	{ quote: "“You only live once, but if you do it right, once is enough.”", author: "― Mae West" },
	{ quote: "“Be the change that you wish to see in the world.”", author: "― Mahatma Gandhi" },
	{ quote: "“Without music, life would be a mistake.”", author: "― Twilight of the Idolse" },
	{ quote: "“A day without laughter is a day wasted.”", author: "― Nicolas Chamforte" },
	{ quote: "“May you live every day of your life.”", author: "― Jonathan Swift" },
];

var randomList = [];
function display() {
 randomList.push(Math.floor(Math.random() * list.length));
	if (randomList[randomList.length - 1] === randomList[randomList.length - 2]) {
		display();
	}
	console.log(randomList);
	document.getElementById("quote").innerHTML = list[randomList[randomList.length - 1]].quote;
	document.getElementById("author").innerHTML = list[randomList[randomList.length - 1]].author;
}











