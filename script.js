const mainDiv = document.querySelector(".boardContainer");
function makeDivs(size) {
  for (let i = 0; i < size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("boardDiv");
    mainDiv.appendChild(newDiv);
  }
} //end of make divs

let gridSize = 256;
makeDivs(gridSize);

let divs = document.querySelectorAll(".boardDiv");

function addColorEffect(nodeList, color) {
  nodeList.forEach((div) => {
    div.addEventListener("mouseover", () => {
      div.style.backgroundColor = `${color}`;
    });
  });
} //end of add color effect

addColorEffect(divs, "black");

const clearBtn = document.querySelector(".clearGrid");

clearBtn.addEventListener("click", () => {
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });
});

const resizeBtn = document.querySelector(".resizeGrid");

resizeBtn.addEventListener("click", createNewBoard);
resizeBtn.addEventListener("click", addColorToNewDivs);

function createNewBoard() {
  let newGridSize = parseInt(prompt("New Grid Size?:"));
  mainDiv.style.gridTemplateColumns = `repeat(${newGridSize}, 1fr)`;
  mainDiv.style.gridTemplateRows = `repeat(${newGridSize}, 1fr)`;
  removeDivs(gridSize);
  gridSize = newGridSize * newGridSize;
  makeDivs(newGridSize * newGridSize);
  //const newDivs = document.querySelectorAll(".boardDiv");
  //addColorEffect(newDivs, colorPicker.value);
  
}

function addColorToNewDivs(){
    divs = document.querySelectorAll(".boardDiv");
  addColorEffect(divs, "black");
}

function removeDivs(size) {
  for (let i = 0; i < size; i++) {
    const boardDiv = document.querySelector(".boardDiv");
    mainDiv.removeChild(boardDiv);
  }
}

const colorPicker = document.getElementById("colorPicker");

colorPicker.addEventListener("change", () => {
  let color = colorPicker.value;
  divs = document.querySelectorAll(".boardDiv");
  addColorEffect(divs, color);
  
});
