const crosswordTable = document.querySelector(".crossword table");
let activeCell = null;
let counter = 99; // Total is 100

// Define the desired cells and letters using arrays
const desiredCells = [];
const desiredLetters = [];
const isMatched = [];

// Function to handle cell click and activate it
function handleCellClick(event) {
  const cell = event.target;
  if (cell.classList.contains("empty")) {
    if (activeCell) {
      activeCell.classList.remove("active");
    }
    cell.classList.add("active");
    activeCell = cell;
  }
}

// Function to handle keyboard events and update active cell content
function handleKeyPress(event) {
  if (activeCell) {
    const key = event.key.toUpperCase();
    if (/[A-Z]/.test(key)) {
      activeCell.textContent = key;
      checkDesiredCells();
    }
  }
}

// Function to check if the active cell matches the desired cells and the entered letters match the desired letters
function checkDesiredCells() {
  for (let i = 0; i < desiredCells.length; i++) {
    if (!isMatched[i] && activeCell === desiredCells[i] && activeCell.textContent.trim() === desiredLetters[i]) {
      counter += 1;
      isMatched[i] = true; // Set the flag to indicate the match
      console.log(counter);
      console.log("Matched!");
      // Perform additional actions for the desired cell and letter match
    }
    else if (isMatched[i]){
      console.log("got already");
    }
  }
  
  if (counter == 100){
    window.alert("Congrats! You win");
    window.open("https://docs.google.com/document/d/1azcmZaRkmIKNkjyV8p7yg7jRZea7Pg1IclUPh2gH67g/edit?usp=sharing");
  }
}

// Event listeners
crosswordTable.addEventListener("click", handleCellClick);
document.addEventListener("keydown", handleKeyPress);

// Define desired cells and letters using arrays
const desiredData = [
  { cellId: "1", letter: "Z" },
  { cellId: "2", letter: "C" },
  { cellId: "3", letter: "W" },
  { cellId: "4", letter: "Z" },
  { cellId: "5", letter: "U" },
  { cellId: "6", letter: "P" },
  { cellId: "7", letter: "I" },
  { cellId: "8", letter: "Z" },
  { cellId: "9", letter: "Z" },
  { cellId: "10", letter: "A" },
  { cellId: "11", letter: "T" },

  { cellId: "12", letter: "F" },
  { cellId: "13", letter: "L" },
  { cellId: "14", letter: "I" },
  { cellId: "15", letter: "L" },
  { cellId: "16", letter: "O" },
  { cellId: "17", letter: "V" },
  { cellId: "18", letter: "E" },
  { cellId: "19", letter: "B" },
  { cellId: "20", letter: "E" },
  { cellId: "21", letter: "Y" },
  { cellId: "22", letter: "V" },
  { cellId: "23", letter: "E" },
  { cellId: "24", letter: "G" },
  { cellId: "25", letter: "A" },
  { cellId: "26", letter: "S" },

  { cellId: "27", letter: "P" },
  { cellId: "28", letter: "O" },
  { cellId: "29", letter: "P" },
  { cellId: "30", letter: "P" },
  { cellId: "31", letter: "I" },
  { cellId: "32", letter: "M" },
  { cellId: "33", letter: "R" },
  { cellId: "34", letter: "C" },



  { cellId: "35", letter: "I" },
  { cellId: "36", letter: "I" },
  { cellId: "37", letter: "T" },
  { cellId: "38", letter: "B" },
  { cellId: "39", letter: "R" },



  { cellId: "40", letter: "C" },
  { cellId: "41", letter: "C" },
  { cellId: "42", letter: "S" },
  { cellId: "43", letter: "A" },
  { cellId: "44", letter: "N" },
  { cellId: "45", letter: "D" },
  { cellId: "46", letter: "I" },
  { cellId: "47", letter: "E" },
  { cellId: "48", letter: "G" },
  { cellId: "49", letter: "O" },


  { cellId: "50", letter: "N" },
  { cellId: "51", letter: "H" },
  { cellId: "52", letter: "F" },
  { cellId: "53", letter: "O" },
  { cellId: "54", letter: "G" },
  { cellId: "55", letter: "D" },

  { cellId: "56", letter: "D" },
  { cellId: "57", letter: "I" },
  { cellId: "58", letter: "S" },
  { cellId: "59", letter: "N" },
  { cellId: "60", letter: "E" },
  { cellId: "61", letter: "Y" },
  { cellId: "62", letter: "L" },
  { cellId: "63", letter: "A" },
  { cellId: "64", letter: "N" },
  { cellId: "65", letter: "D" },
  { cellId: "66", letter: "L" },
  { cellId: "67", letter: "I" },

  { cellId: "68", letter: "C" },
  { cellId: "69", letter: "L" },
  { cellId: "70", letter: "O" },
  { cellId: "71", letter: "S" },
  { cellId: "72", letter: "S" },
  { cellId: "73", letter: "I" },
  { cellId: "74", letter: "X" },
  { cellId: "75", letter: "E" },

  { cellId: "76", letter: "L" },
  { cellId: "77", letter: "W" },
  { cellId: "78", letter: "P" },
  { cellId: "79", letter: "H" },

  { cellId: "80", letter: "E" },
  { cellId: "81", letter: "E" },
  { cellId: "82", letter: "B" },
  { cellId: "83", letter: "O" },
  { cellId: "84", letter: "O" },
  { cellId: "85", letter: "B" },
  { cellId: "86", letter: "S" },

  { cellId: "87", letter: "R" },
  { cellId: "88", letter: "U" },

  { cellId: "89", letter: "D" },
  { cellId: "90", letter: "I" },
  { cellId: "91", letter: "M" },
  { cellId: "92", letter: "S" },
  { cellId: "93", letter: "U" },
  { cellId: "94", letter: "M" },
  { cellId: "95", letter: "B" },

  { cellId: "96", letter: "B" },
  { cellId: "97", letter: "A" },
  { cellId: "98", letter: "C" },
  { cellId: "99", letter: "K" },
  { cellId: "100", letter: "Y" },

  // Add more desired cell and letter data here
];

// Generate desired cells and letters using a loop
for (let i = 0; i < desiredData.length; i++) {
  const desiredCell = document.getElementById(desiredData[i].cellId);
  const desiredLetter = desiredData[i].letter;
  desiredCells.push(desiredCell);
  desiredLetters.push(desiredLetter);
  isMatched.push(false);
}
