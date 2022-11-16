//Fetch the DOM Elements from the HTML : 
const main = document.querySelector(".main");

//Define the functions : 
function createGridElements() {
    let i = 0;
    do 
    {const square = document.createElement('div');
    square.setAttribute('style', 'display:flex; background: white; height: 5vh ; width: 5vh;');
    square.addEventListener("mouseover", () => {square.style.backgroundColor = "black";});
    main.appendChild(square);
    i += 1}
    while (i<256) 
}

createGridElements();