(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

const userBtn = document.getElementById('modal-btn');

userBtn.addEventListener('click', () => {
  const userName = document.querySelector('.header__btn-text');
  const userInput = document.getElementById('modal-input').value;

  if (userInput.length > 1) {
    userName.textContent = `Вітаємо, ${userInput}!`;
  } else {
    alert('Error. Your name is incorrect');
  }
});

const headerForm = document.querySelector('.modal__form');
headerForm.addEventListener('submit', e => {
  e.preventDefault();
});

const headerSelectBtn = document.querySelector('.header__text');
const headerSelectList = document.querySelector('.header__select');
headerSelectBtn.addEventListener('click', () => {
  if (headerSelectList.style.display === 'block') {
    headerSelectList.style.display = 'none';
  } else {
    headerSelectList.style.display = 'block';
  }
});

const allCard = document.getElementById('header-all');
const numsCard = document.getElementById('header-nums');
const gamesCard = document.getElementById('header-games');
const seeCard = document.getElementById('header-see');

const cardOne = document.querySelector('.card-one');
const cardTwo = document.querySelector('.card-two');
const cardThree = document.querySelector('.card-three');
const cardFour = document.querySelector('.card-four');
const cardFive = document.querySelector('.card-five');
const cardSix = document.querySelector('.card-six');
const cardSeven = document.querySelector('.card-seven');
const cardEight = document.querySelector('.card-eight');
const cardNine = document.querySelector('.card-nine');
const cardTen = document.querySelector('.card-ten');

allCard.addEventListener('click', () => {
  cardOne.style.display = 'block';
  cardTwo.style.display = 'block';
  cardThree.style.display = 'block';
  cardFour.style.display = 'block';
  cardFive.style.display = 'block';
  cardSix.style.display = 'block';
  cardSeven.style.display = 'block';
  cardEight.style.display = 'block';
  cardNine.style.display = 'block';
  cardTen.style.display = 'block';
});
numsCard.addEventListener('click', () => {
  cardOne.style.display = 'block';
  cardTwo.style.display = 'block';
  cardThree.style.display = 'none';
  cardFour.style.display = 'block';
  cardFive.style.display = 'block';
  cardSix.style.display = 'none';
  cardSeven.style.display = 'none';
  cardEight.style.display = 'block';
  cardNine.style.display = 'none';
  cardTen.style.display = 'none';
});
gamesCard.addEventListener('click', () => {
  cardOne.style.display = 'none';
  cardTwo.style.display = 'none';
  cardThree.style.display = 'block';
  cardFour.style.display = 'none';
  cardFive.style.display = 'none';
  cardSix.style.display = 'block';
  cardSeven.style.display = 'block';
  cardEight.style.display = 'none';
  cardNine.style.display = 'none';
  cardTen.style.display = 'none';
});
seeCard.addEventListener('click', () => {
  cardOne.style.display = 'none';
  cardTwo.style.display = 'none';
  cardThree.style.display = 'none';
  cardFour.style.display = 'none';
  cardFive.style.display = 'none';
  cardSix.style.display = 'none';
  cardSeven.style.display = 'none';
  cardEight.style.display = 'none';
  cardNine.style.display = 'block';
  cardTen.style.display = 'block';
});

const themeBtn = document.getElementById('header-btn');
const containers = document.querySelectorAll('.container');
let isDarkTheme = false;

themeBtn.addEventListener('click', () => {
  containers.forEach(container => {
    if (isDarkTheme) {
      container.classList.add('light-theme');
      container.classList.remove('dark-theme');
      themeBtn.querySelector('use').setAttribute('href', '');
    } else {
      container.classList.add('dark-theme');
      container.classList.remove('light-theme');
      themeBtn.querySelector('use').setAttribute('href', '');
    }
  });

  isDarkTheme = !isDarkTheme;
});
