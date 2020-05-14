/*--------------------- Constants ------------------*/
const START_GAME = 16;

/*--------------------- Variables ------------------*/
let count = 1;
let cellsMax;

/*-------------- Cached Element References --------*/
const container = document.querySelector('.container');

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
};