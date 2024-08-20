let player1;
let player2;
let currentPlayer;
let gameArray = ["O", "X"];
let userMark = document.getElementsByTagName("h5")[0];
let boxes = document.querySelectorAll("#main div");
let X_or_O = 0;
let winnerShown = false;



//  function to diabled input boxes after game is over or winner is declared
function disableInput() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = null;
  }
  userMark.innerHTML = "Repick the mark"
}

function pickMark() {
  let userPick = prompt("Pick your mark: X or O");
  player1 = userPick;

  // Start with 'X'
  currentPlayer = "X";

  // By default setting the player2 value
  if (player1 === "X") {
    player2 = "O";
  } else if (player1 === "O") {
    player2 = "X";
  }

  // Restricting the user from putting random marks
  if (gameArray.includes(player1)) {
    console.log("Valid response");
    userMark.innerHTML = `Player 1: ${userPick} | Player 2: ${player2}`;
  } else {
    alert("Enter a valid mark");
    pickMark();
  }
  enableInput()
}

// Attaching event listeners to the boxes after the player picks their mark
function enableInput() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].onclick = function() {
      if (this.innerHTML !== "X" && this.innerHTML !== "O") {
        this.innerHTML = currentPlayer;
        play();
      }
    };
  }
}

let turn = document.getElementById("turn");

function showWinner(b1, b2, b3) {
  b1.classList.add("win");
  b2.classList.add("win");
  b3.classList.add("win");
  turn.innerHTML = (currentPlayer === player1 ? player2 : player1) + " wins";
  winnerShown = true;
}

function reset() {
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = "";
    boxes[i].classList.remove("win");
    turn.innerHTML = " ";
    disableInput()
  }
}

function play() {

  // Toggle between 'X' and 'O' for each turn
  currentPlayer = currentPlayer === "X" ? "O" : "X";

  let box1 = document.getElementById("box1");
  let box2 = document.getElementById("box2");
  let box3 = document.getElementById("box3");
  let box4 = document.getElementById("box4");
  let box5 = document.getElementById("box5");
  let box6 = document.getElementById("box6");
  let box7 = document.getElementById("box7");
  let box8 = document.getElementById("box8");
  let box9 = document.getElementById("box9");

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box2.innerHTML &&
    box1.innerHTML === box3.innerHTML
  ) {
    showWinner(box1, box2, box3);
    disableInput()
  }

  if (
    box4.innerHTML !== "" &&
    box4.innerHTML === box5.innerHTML &&
    box4.innerHTML === box6.innerHTML
  ) {
    showWinner(box4, box5, box6);
    disableInput()
  }

  if (
    box7.innerHTML !== "" &&
    box7.innerHTML === box8.innerHTML &&
    box7.innerHTML === box9.innerHTML
  ) {
    showWinner(box7, box8, box9);
    disableInput()
  }

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box4.innerHTML &&
    box1.innerHTML === box7.innerHTML
  ) {
    showWinner(box1, box4, box7);
    disableInput()
  }

  if (
    box2.innerHTML !== "" &&
    box2.innerHTML === box5.innerHTML &&
    box2.innerHTML === box8.innerHTML
  ) {
    showWinner(box2, box5, box8);
    disableInput()
  }

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box6.innerHTML &&
    box3.innerHTML === box9.innerHTML
  ) {
    showWinner(box3, box6, box9);
    disableInput()
  }

  if (
    box1.innerHTML !== "" &&
    box1.innerHTML === box5.innerHTML &&
    box1.innerHTML === box9.innerHTML
  ) {
    showWinner(box1, box5, box9);
    disableInput()
  }

  if (
    box3.innerHTML !== "" &&
    box3.innerHTML === box5.innerHTML &&
    box3.innerHTML === box7.innerHTML
  ) {
    showWinner(box3, box5, box7);
    disableInput()
  }
}

