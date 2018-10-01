let colors = [];
let pickedColor;
let numSquares = 6;
let squares = document.querySelectorAll('.squares');
let displayColor = document.getElementById('displayColor');
let h1 = document.querySelector('h1');
let messageDisplay = document.querySelector('#message');
let buttonMode = document.querySelectorAll('.mode');
let resetButton = document.querySelector('#reset');
let playAgainDisplay = document.getElementById('playAgain');

init();

function init() {
  setupButtons();
  setupSquares();
  reset();
}

function setupButtons() { 
  for(let i = 0; i < buttonMode.length; i++){
    buttonMode[i].addEventListener("click", function(){
      buttonMode[0].classList.remove("selected"); 
      buttonMode[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
      colors = generateRandomColors(numSquares);
      h1.style.backgroundColor = 'steelblue';
      messageDisplay.textContent = '';
      displayPickedColor();
      easySquareMode();
   });
  }
}

function setupSquares() {
  colors = generateRandomColors(numSquares);   
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = colors[i];
    squares[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        changeColor();
        h1.style.backgroundColor = clickedColor;
        messageDisplay.textContent = 'CORRECT!!!';
        playAgainDisplay.textContent = 'Play Again?';
      } else {
        this.style.backgroundColor = '#232323';
        messageDisplay.textContent = 'TRY AGAIN  :)';
      }
    });
  }
}

function reset(){
  resetButton.addEventListener('click', function(){
    setupSquares();
    displayPickedColor();
    h1.style.backgroundColor = 'steelblue';
    messageDisplay.textContent = '';
    playAgainDisplay.textContent = 'New Colors';
  });
  displayPickedColor();  
}

function displayPickedColor(){
  pickedColor = pickColor();
  displayColor.textContent = pickedColor;
}

function easySquareMode(){
  for(i = 0; i < squares.length; i++){  //loop through all 6 squares
    if(colors[i]){  //now if we have only the 3 colors, so this will work only for the first 3 squares
      squares[i].style.backgroundColor = colors[i];  //we are assiging the 3 new colors each time we hit the easy button
      squares[i].style.display = "block";     
    } else {
      squares[i].style.display = "none"; //we are making the last 3 squares disapear;
    }
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function changeColor() {
  for(let i = 0; i < squares.length; i++){
    squares[i].style.backgroundColor = pickedColor;
  }
}

function generateRandomColors(num) {
  let arr = [];
  for(let i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}


// let reset = () => {
//   colors = generateRandomColors();
// };

// let setupSquares = () => {
//   for(let i = 0; i < squares.length; i++){
//     // if(colors[i]){
//     //   squares[i].style.backgroundColor = colors[i];
//     }
// };