var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
if(mySrc === 'images/космос.jpg') {
    myImage.setAttribute('src','images/optimus prime 3.jpg');
} else {
    myImage.setAttribute('src','images/космос.jpg');
}
}
var myButton = document.querySelector('button');
var myHeding = document.querySelector('h1');
function setUserName() {
    var myName = prompt('Please Enter Your Name.');
    localStorage.setItem('name',myName);
    myHeding.textContent = 'хочу все знать' +  myName ;
}
if (!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeding.textContent = 'хочу все знать' + storedName ;
}
myButton.onclick = function() {
    setUserName();
  }