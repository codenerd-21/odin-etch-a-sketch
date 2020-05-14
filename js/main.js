/*--------------------- Constants ------------------*/
const START_GAME = 16;
/*--------------------- Variables ------------------*/
let count = 1;
let cellsMax;

/*-------------- Cached Element References --------*/
const container = document.querySelector('.container');

/*------------------ Event Listeners --------------*/
//items.addEventListener('mouseover', styleEtch);

/*--------------------- Functions -----------------*/

//Initiate Game
init(START_GAME);

//Intitate Game with Required 16 x 16 Squares
function init(num) {
  cellsMax = num * num;
  container.style.setProperty('grid-template-columns', 'repeat(' + num + ', 1fr)');
  for (let i = 0; i < cellsMax; i++) {
    const items = document.createElement('div');
    items.classList.add('items');
    items.setAttribute('id', count);
    items.textContent = 'place holder text';
    container.appendChild(items);
    count++;
  }
}

function styleEtch() {
  let allCells = document.querySelectorAll('.items');
  for (let i = 0; i < allCells.length; i++) {
    allCells[i].style.backgroundColor = '#D6ED17';
  }
}
