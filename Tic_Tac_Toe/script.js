const boxes = document.querySelectorAll(".box");
const gameInfo = document.querySelector(".game-info");
const newGameBtn = document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPosition = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// /let's create a function to initialise  the game
function initGame(){
    currentPlayer = "X";
    gameGrid = ["","","","","","","","",""];
    // UI empty 
    boxes.forEach((box,index) => {
        box.textContent = "";
        boxes[index].style.pointerEvents = "all";
        // remove green colour 
        box.classList =  `box box${index+1}`;
    });
    newGameBtn.classList.remove("active");
    gameInfo.textContent = `Current Player - ${currentPlayer}`;
}

initGame();

function swapTurn(){
    if(currentPlayer === "X"){
        currentPlayer ="0";
    }else{
        currentPlayer ="X";
    }
    // UI Update
    gameInfo.innertext = `Current Player -${currentPlayer}`;
}

function checkWinnerOver(){
  let answer = "";

  winningPosition.forEach((position) => {
    // all 3 boxes should be non-empty and exactly same value 
    if( (gameGrid[position[0]] !== "" || gameGrid[position[1]] !== "" || gameGrid[position[2]] !== "") && (gameGrid[position[0]] === gameGrid[position[1]]) && (gameGrid[position[1]] === gameGrid[position[2]])) {
        
        // check if winner is X
        if(gameGrid[position[0]] === "X")
            answer = "X";
        else
            answer = "0";

            // disable pointer events 
            boxes.forEach((box) => {
                box.style.pointerEvents ="none";
            })

            // now we know X is the winner 
            boxes[position[0]].classList.add("win");
            boxes[position[1]].classList.add("win");
            boxes[position[2]].classList.add("win");
     }
  });

//   it means we have a winner 
  if(answer !== ""){
    gameInfo.innerText = `Winner Player - ${answer}`;
    newGameBtn.classList.add("active");
    return;
  }
 
  // when there is a tie 
  let fillCount = 0;
  gameGrid.forEach((box) => {
    if(box !== "")
        fillCount++;
  });

//   board is filled game is TIE 
if(fillCount === 9 ){
    gameInfo.textContent = "Game Tied !";
    newGameBtn.classList.add("active");
}
}

function handleClick(index){
    if(gameGrid[index] === ""){
         boxes[index].textContent = currentPlayer;
         gameGrid[index] = currentPlayer;
         boxes[index].style.pointerEvents = "none";
         // swap turn
         swapTurn();
         gameInfo.textContent =`Current Player : ${currentPlayer}`;
        //  check winner
        checkWinnerOver();
    }
}

// Add Event Listener to all Boxes to Get Player Input 
boxes.forEach((box,index) => {
    box.addEventListener("click", () =>{
        handleClick(index);
    })
})

// adding an event listener to button
newGameBtn.addEventListener("click", initGame);


