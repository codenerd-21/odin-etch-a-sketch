/*--------------------- Constants ------------------*/
const START_GAME = 16;


/*--------------------- Variables ------------------*/
let count = 1;
let cellsMax;

/*-------------- Cached Element References --------*/
const container = document.querySelector('.container');
const btn = document.querySelector('#btn');

/*------------------ Event Listener ---------------*/
btn.addEventListener('click', promptUser);

/*--------------------- Functions -----------------*/

//Initiate Game
init(START_GAME);

//Intitate Game with Required 16 x 16 Squares
function init(num) {
  cellsMax = num * num;
  container.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
  for (let i = 0; i < cellsMax; i++) {
    const items = document.createElement('div');
    //Changes background to yellow on mouseover
    items.addEventListener('mouseover', () => {
      items.style.backgroundColor = '#D6ED17'
    });
    items.classList.add('items');
    items.setAttribute('id', count);
    items.textContent = 'place holder text';
    container.appendChild(items);
    count++;
  }
}

//Prompt User for New Grid Size and Clear Grid
function promptUser() {
  let msgBox = prompt("Enter the number of squares per side for the new Grid.", "(Max number is 64.)");
  let msgValue = parseInt(msgBox);
  if (msgValue != null) {
    //Selects all cells so I can delete them.
    const allCells = document.querySelectorAll('div.items');
    allCells.forEach(function (item) {
      item.remove();
    })
    //Re-initiates game with new starting grid value
    init(msgValue);
  }
}
