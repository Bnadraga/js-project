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
const categories = games.map(game => game.category)

allCard.addEventListener('click', () => {
  
});

const games = [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: 'numerical',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: 'numerical',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: 'game',
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: 'numerical',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: 'numerical',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: 'game',
  },
  {
    id: 7,
    name: 'Футбол',
    category: 'game',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: 'numerical',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: 'acquaintance',
  },
  {
    id: 10,
    name: 'Вчений',
    category: 'acquaintance',
  },
];
