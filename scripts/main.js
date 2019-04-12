var myImage = document.querySelector('img');
var myBrowser = document.querySelector('h1');
var myButton = document.querySelector('button');

function setUserName() {
	var myName = prompt('Please enter your name.');
	localStorage.setItem('name', myName);
	myBrowser.textContent = 'Mozilla is cool, ' + myName;
}

if(!localStorage.getItem('name')) {
		setUserName();
	} else {
		var storedName = localStorage.getItem('name');
		myBrowser.textContent = 'Mozilla is cool, ' + storedName;
	}

myImage.onclick = function () {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/firefox-logo.png') {
		myImage.setAttribute ('src', 'images/chrome-logo.png');
		myBrowser.textContent = 'Chrome is cool, ' + storedName;
	} else {
		myImage.setAttribute('src', 'images/firefox-logo.png');
		myBrowser.textContent = 'Mozilla is cool, ' + storedName;
	}		
}


myButton.onclick = function () {
	setUserName();
}
