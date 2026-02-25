let board = [
  ["🍕", "🐶", "🚀", "💡"],
  ["🎉", "🍕", "🍀", "🐶"],
  ["🚀", "🎨", "💡", "🍀"],
  ["🎨", "⚡", "🎉", "⚡"],
];

let firstCell = null; //first row click
let firstRow = -1; //first col clicked
let firstCol = -1;
let matches = 0;
let attempts = 0;

let grid = document.getElementById("grid");
function playGame() {
  let html = "<table>";

  //build board
  for (let i = 0; i < board.length; i++) {
    html += "<tr>";
    for (let j = 0; j < board[i].length; j++) {
      html += `<td onclick = "cellClicked(this, ${i}, ${j})">?</td>`;
    }
    html += "</tr>";
  }

  html += "</table>";
  grid.innerHTML = html;

  //reset counter/state

  firstCell = null; //first row click
  firstRow = -1; //first col clicked
  firstCol = -1;
  matches = 0;
  attempts = 0;
  displayStats();
  document.getElementById('message').innerHTML='';
}

function cellClicked(cell, row, col) {
  if (cell.innerHTML !== "?") {
    return;
  }
  //already revealed emojis
  cell.innerHTML = board[row][col];

  if (firstRow === -1) {
    firstCell = cell; //stores the first clicked element
    firstRow = row;
    firstCol = col;
    console.log(firstCell, firstRow, firstCol);
    document.getElementById("message").innerHTML = "";
  } else {
    //second click
    attempts++;
  

  if (board[firstRow][firstCol] === board[row][col]) {
    //match - leave both reveal
    matches++;
    document.getElementById("message").innerHTML = "☑️ Match Found!";
  } else {
    //No match found- try again
    firstCell.innerHTML = "?";
    cell.innerHTML = "?";
    document.getElementById("message").innerHTML = "❌ Try Again";
  }
  //reset for next turn
  
  firstCell = null; //first row click
  firstRow = -1; //first col clicked
  firstCol = -1;
  displayStats();
  }
}

function displayStats() {
  document.getElementById("stats").innerHTML =
    `Matches : ${matches} | Attempts: ${attempts}`;
}
