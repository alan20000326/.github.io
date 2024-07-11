var myImage = document.querySelector("img");

myImage.onclick = function () {
    let mySrc = myImage.getAttribute("src");
    if (mySrc === "images/images.jpg"){
        myImage.setAttribute("src","images/images01.webp");
    }else{
        myImage.setAttribute("src","images/images.jpg");
    }
};
var myButton =
document.querySelector("button");
var myHeading =
document.querySelector("h1");

function setUserName() {
    let myName = prompt('Please enter your name.');
    if(!myName || myName === null) {
      setUserName();
    } else {
      localStorage.setItem('name', myName);
      myHeading.innerHTML = 'Mozilla is cool, ' + myName;
    }
  }
myButton.onclick = function(){
    setUserName();
};