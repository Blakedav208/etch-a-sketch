

const mainDiv = document.querySelector(".boardContainer");
function makeDivs(size) {
  for (let i = 0; i < size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("boardDiv");
    mainDiv.appendChild(newDiv);
  }
} //end of make divs

makeDivs(256);

const divs = document.querySelectorAll(".boardDiv");

function addColorEffect(nodeList) {
  nodeList.forEach((div) => {
    div.addEventListener("mouseover", (e) => {
      div.style.backgroundColor = "blue";
    });
  });
}//end of add color effect

addColorEffect(divs);

const clearBtn = document.querySelector(".clearGrid");

clearBtn.addEventListener("click", () => {
  divs.forEach((div) => {
    div.style.backgroundColor = "white";
  });

  let newGridSize = parseInt(prompt("New Grid Size?:"));
  mainDiv.style.gridTemplateColumns = `repeat(${newGridSize}, 20px)`;
  mainDiv.style.gridTemplateRows = `repeat(${newGridSize}, 20px)`;
  removeDivs(256);
  makeDivs(newGridSize * newGridSize);
  const newDivs = document.querySelectorAll(".boardDiv");
  addColorEffect(newDivs);
});

function removeDivs(size){
    for(let i = 0; i < size; i++){
        const boardDiv = document.querySelector('.boardDiv');
        mainDiv.removeChild(boardDiv);
    }

}
