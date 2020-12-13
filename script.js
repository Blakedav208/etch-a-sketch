const mainDiv = document.querySelector('.boardContainer');

for(let i = 0; i < 256; i++){
    const newDiv = document.createElement('div');
    newDiv.classList.add('boardDiv');
    mainDiv.appendChild(newDiv);
}