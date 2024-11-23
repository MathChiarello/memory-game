const emojis = [
  '🐀',
  '🐀',
  '🐊',
  '🐊',
  '🐕',
  '🐕',
  '🐋',
  '🐋',
  '🐎',
  '🐎',
  '🐉',
  '🐉',
  '🐒',
  '🐒',
  '🐘',
  '🐘',
];
const shuffleEmojis = emojis.sort(() => Math.random() > 0.5 ? 2 : -1);
let selectedCards = [];

function checkMatch() {
  if (selectedCards[0].innerHTML === selectedCards[1].innerHTML) {
    selectedCards[0].classList.add('matched');
    selectedCards[1].classList.add('matched');
  } else {
      selectedCards[0].classList.remove('selected');
      selectedCards[1].classList.remove('selected');
    }
  selectedCards = [];

    if (document.querySelectorAll('.matched').length === emojis.length) {
      let result = document.querySelector('.result');
      result.innerHTML = 'Parabéns Você terminou o jogo!';
    }
  }

function handleClick() {
  if (selectedCards.length < 2) {
    if (selectedCards.includes(this)) {
      return;
    }
    this.classList.add('selected');
    selectedCards.push(this);
  }
  
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 300);
  }
}

for (let index = 0; index < emojis.length; index++) {
  let box = document.createElement('div');
  box.innerHTML = shuffleEmojis[index];
  box.classList.add('item');
  box.onclick = handleClick;
  document.querySelector('.game').appendChild(box); 
}