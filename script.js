function makeDivs(size) {
  const mainDiv = document.querySelector(".boardContainer");

  for (let i = 0; i < size; i++) {
    const newDiv = document.createElement("div");
    newDiv.classList.add("boardDiv");
    mainDiv.appendChild(newDiv);
  }
} //end of make divs

makeDivs(256);

const divs = document.querySelectorAll(".boardDiv");

divs.forEach((div) => {
  div.addEventListener("mouseover", (e) => {
    e.target.style.backgroundColor = "blue";
  });
});

const clearBtn = document.querySelector(".clearGrid");

clearBtn.addEventListener("click", () => {
  divs.forEach((div) => {
      div.style.backgroundColor = "white";
  });
  
});
