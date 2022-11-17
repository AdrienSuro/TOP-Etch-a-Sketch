//Fetch the DOM Elements from the HTML : 
const main = document.querySelector(".main");
const button = document.querySelector(".userprompt");
var userInput = 16;
var numberOfSquares = userInput * userInput;

//Define the functions : 
function createGridElements() {
    let i = 0;
    squareWidth = 600 / userInput;
    numberOfSquares = userInput * userInput;
    console.log(userInput);
    do 
    {const square = document.createElement('div');
    square.setAttribute('style', `display:flex; background: white; height: ${squareWidth}px ; width: ${squareWidth}px`);
    square.addEventListener("mouseover", () => {square.style.backgroundColor = "black";});
    main.appendChild(square);
    i += 1;
    }
    while (i < numberOfSquares) 
}

function userInputFunction() {
    userInput = parseInt(prompt("Please enter the number of squares you want on each side"));
    if (userInput > 100) {
        alert("Common, be kind to your machine, input a number up to 100");
    }
    else if (typeof(userInput) != 'number') {
        alert("Please input a number and not some Schabernack")
    }
    while (main.hasChildNodes()) {
        main.removeChild(main.firstChild);
      }
    createGridElements();
}

createGridElements();

button.addEventListener("click", userInputFunction);