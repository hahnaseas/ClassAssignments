'use strict';

let cardsArray = [{
  'name': 'abroaderOtter',
  'images': 'images/abroaderOtter.png'
}, {
  'name': 'attendee777',
  'images': 'images/attendee777.png'
}, {
  'name': 'demonBox',
  'images': 'images/demonBox.png'
}, {
  'name': 'fatCat',
  'images': 'images/fatCat.png'
}, {
  'name': 'gaeliKitten',
  'images': 'images/gaeliKitten.png'
}, {
  'name': 'greenerCleaner',
  'images': 'images/greenerCleaner.png'
}, {
  'name': 'hoarySnowman',
  'images': 'images/hoarySnowman.png'
}, {
  'name': 'mamaAutomaton',
  'images': 'images/mamaAutomaton.png'
}, {
  'name': 'paissaBrat',
  'images': 'images/paissaBrat.png'
}, {
  'name': 'theMajor',
  'images': 'images/theMajor.png'
}, {
  'name': 'trike',
  'images': 'images/trike.png'
}, {
  'name': 'yukinkoSnowflake',
  'images': 'images/yukinkoSnowflake.png'
}];

// duplicate array to create a match for each card; randomize the cardsArray
let gameGrid = cardsArray.concat(cardsArray).sort(function()
 {
    return 0.5 - Math.random();
});

//variables
let firstGuess = '';
let secondGuess = '';
let count = 0;
let previousTarget = null;
let delay = 1200;
let attempts = 0;

// capture div with an id of game 
const game = document.getElementById('game');

// create a section with a class of gird
const grid = document.createElement('section');
grid.setAttribute('class', 'grid');

// append the grid section to game div
game.appendChild(grid);
gameGrid.forEach(function(item)
 {
  let name = item.name,
    img = item.images;

  let card = document.createElement('div');
  card.classList.add('card');
  card.dataset.name = name;

  let front = document.createElement('div');
  front.classList.add('front');

  let back = document.createElement('div');
  back.classList.add('back');
  back.style.backgroundImage = 'url(' + img + ')';

  grid.appendChild(card);
  card.appendChild(front);
  card.appendChild(back);
});

let match = function match() {
  let selected = document.querySelectorAll('.selected');
  selected.forEach(function(card) {
    card.classList.add('match');
  });

  //check if all cards are matched
  if (document.querySelectorAll('.match').length === gameGrid.length) {
    document.dispatchEvent(winningMsg);
  }
};

let resetGuesses = function resetGuesses() {
  firstGuess = '';
  secondGuess = '';
  count = 0;
  previousTarget = null;
  
  //increment attempts
  attempts++; 

  let selected = document.querySelectorAll('.selected');
  selected.forEach(function(card) {
    card.classList.remove('selected');
  });

  //update attempts display 
  console.log('Number of attempts: ', attempts);
};

//event listener for clicking cards
grid.addEventListener('click', function(event) {
  let clicked = event.target;
  if (
    clicked.nodeName === 'SECTION' ||
    clicked === previousTarget ||
    clicked.parentNode.classList.contains('selected') ||
    clicked.parentNode.classList.contains('match')
  ) {
    return;
  }

  if (count < 2) {
    count++;

    if (count === 1) {
      firstGuess = clicked.parentNode.dataset.name;
      console.log(firstGuess);
      clicked.parentNode.classList.add('selected');
    } else {
      secondGuess = clicked.parentNode.dataset.name;
      console.log(secondGuess);
      clicked.parentNode.classList.add('selected');
    }

    if (firstGuess && secondGuess) {
      if (firstGuess === secondGuess) {
        setTimeout(match, delay);
      }
      setTimeout(resetGuesses, delay);
    }
    previousTarget = clicked;
  }
});

//custom event for winning message
const winningMsg = new Event('message');

//event listener for winning message
document.addEventListener('message', () => {
  console.log('Congratulations, you won!');
});

//trigger event listener
document.dispatchEvent(winningMsg);
