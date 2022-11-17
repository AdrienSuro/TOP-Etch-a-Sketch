//Fetch the DOM Elements from the HTML : 
const main = document.querySelector(".main");
const button = document.querySelector(".userprompt");
var userInput = 0;
var i = 0;
var numberOfSquares = 256;
var squareWidth = 6;

//Define the functions : 
function createGridElements() {
    do 
    {const square = document.createElement('div');
    square.setAttribute('style', `display:flex; background: white; height: ${squareWidth}% ; width: ${squareWidth}%`);
    square.addEventListener("mouseover", () => {square.style.backgroundColor = "black";});
    main.appendChild(square);
    i += 1}
    while (i < numberOfSquares) 
}

function userInputFunction() {
    var userInput = parseInt(prompt("Please enter the number of squares you want on each side"));
    if (userInput > 100) {
        alert("Common, be kind to your machine, input a number up to 100");
    }
    else if (typeof(userInput) != 'number') {
        alert("Please input a number and not some Schabernack")
    }
    numberOfSquares = (userInput * userInput)
    squareWidth = 100 / userInput ;
    // let allSquares = document.querySelectorAll("div");
    // for (let j=0; j>allSquares.length; j++) {
    //     allSquares[0].remove();
    //     }
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    createGridElements()
}

createGridElements();

button.addEventListener("click", userInputFunction);