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
    alert("Error. Your name is incorrect");
  }
});

const headerForm = document.querySelector('.modal__form');
headerForm.addEventListener('submit', e => {
  e.preventDefault();
});

// const headerSelectBtn = document.querySelector('.header__text');
// const headerSelectList = document.querySelector('.header__select');
// headerSelectBtn.addEventListener('click', () => {
//   headerSelectList.style.display = 'block';
// });

// const headerBtn = document.getElementById('header-btn');
// const container = document.querySelector('.container')
// headerBtn.addEventListener('click', () => {
//   container.classList.toggle('dark-theme');
//   container.classList.toggle('light-theme');
// });

// container.classList.add('light-theme');