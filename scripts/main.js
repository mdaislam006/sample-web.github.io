var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello, World!';

// document.querySelector('html').onclick = function() {
//     alert('Ouch! Stop poking me!');
// }

var myImg = document.querySelector('img');
myImg.onclick = function(){
	console.log('inside image changer')
	var mySrc = myImg.getAttribute('src')
	if(mySrc == 'images/firefox-icon.png'){
		myImg.setAttribute('src', 'images/firefox-icon2.jpg');
	} else {
		myImg.setAttribute('src', 'images/firefox-icon.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName(){
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myHeading.textContent = "Hello, " + myName + "!";
}

if(!localStorage.getItem('name')){
	setUserName();
} else {
	var storedName = localStorage.getItem('name');
	myHeading.textContent = "Hello, " + storedName + "!";
}

myButton.onclick = function(){
	setUserName();
}