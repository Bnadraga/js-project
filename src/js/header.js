(() => { 
    const refs = { 
      openModalBtn: document.querySelector("[data-modal-open]"), 
      closeModalBtn: document.querySelector("[data-modal-close]"),
      modal: document.querySelector("[data-modal]"), 
    }; 
   
    refs.openModalBtn.addEventListener("click", toggleModal); 
    refs.closeModalBtn.addEventListener("click", toggleModal); 
   
    function toggleModal() { 
      refs.modal.classList.toggle("is-hidden"); 
      document.body.classList.toggle("no-scroll"); 
    } 
})();

const headerInput = document.getElementById('modal-input').value
const headerBtn = document.getElementById('modal-btn')
const headerUser = document.querySelector('header__open-modal')

headerBtn.addEventListener('click', () => {
    headerUser.innerHTML = `Вітаємо, ${headerInput}`
})
