/* Variables */
var synth = window.speechSynthesis;
var textToSpeak = '';
var speakButton = document.getElementById('speakButton');

// Arrays of random words
var nouns = ['turkey', 'mom', 'dad', 'dog', 'my teacher', 'elephant', 'cat'];
var verbs = ['sat on', 'ate', 'danced with', 'saw', "doesn't bike", 'kissed'];
var adjectives = ['a funny', 'a scary', 'a goofy', 'a slimy', 'a barking', 'a fat'];
var secondNouns = ['goat', 'monkey', 'fish', 'cow', 'frog', 'bug', 'worm'];
var places = ['on the moon', 'on the chair', 'in my spaghetti', 'in my soup', 'on the grass', 'in my shoes'];

/* Functions */
function getRandomWord(array) {
	var randomIndex = Math.floor(Math.random() * array.length);
	return array[randomIndex];
}

function buildTextToSpeak() {
	var phrase = getRandomWord(nouns) + ' ' +
	             getRandomWord(verbs) + ' ' +
	             getRandomWord(adjectives) + ' ' +
	             getRandomWord(nouns) + ' ' +
	             'in ' + getRandomWord(places) + '.';

	textToSpeak += phrase + ' ';
}

function speakNow(string) {
	var utterThis = new SpeechSynthesisUtterance(string);
	synth.speak(utterThis);
}

/* Event Listeners */
document.getElementById('button1').onclick = buildTextToSpeak;
document.getElementById('button2').onclick = buildTextToSpeak;
document.getElementById('button3').onclick = buildTextToSpeak;
document.getElementById('button4').onclick = buildTextToSpeak;
document.getElementById('button5').onclick = buildTextToSpeak;
speakButton.onclick = function() {
	speakNow(textToSpeak.trim());
};
