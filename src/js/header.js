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

const headerSelectBtn = document.querySelector('.header__text');
const headerSelectList = document.querySelector('.header__select');
headerSelectBtn.addEventListener('click', () => {
  headerSelectList.style.display = 'block';
});

// const userName = document.querySelector('.header__modal-open');
// const userInput = document.getElementById('modal-input').value;
// const userBtn = document.getElementById('modal-btn');

// userBtn.addEventListener('click', () => {
//   userName.innerHTML = `Вітаємо, ${userInput}!`;
// });

// const headerForm = document.querySelector('.modal__form');
// headerForm.addEventListener('submit', (event) => {
//   event.preventDefault();
// });

// const headerBtn = document.getElementById('header-btn');
// headerBtn.addEventListener('click', () => {
//   const body = document.querySelector('body');
//   if (body.classList.contains('light-theme')) {
//     body.classList.remove('light-theme');
//     body.classList.add('dark-theme');
//     document.querySelector('.container').classList.remove('light-theme');
//     document.querySelector('.container').classList.add('dark-theme');
//   } else {
//     body.classList.remove('dark-theme');
//     body.classList.add('light-theme');
//     document.querySelector('.container').classList.remove('dark-theme');
//     document.querySelector('.container').classList.add('light-theme');
//   }
// });
