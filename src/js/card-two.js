const randomNumberTwo = Math.floor(Math.random() * 10) + 1;
const btnTwo = document.getElementById('card-two-btn')
const textTwo = document.querySelector('.card-two__text')

btnTwo.addEventListener('click', () => {
    let inputTwo = document.getElementById('card-two-input').value  
    inputTwo = parseInt(inputTwo)

    if(inputTwo === randomNumberTwo){
        textTwo.innerHTML = `Вітаю, ви вгадали число ${randomNumberTwo}!`
    }
    else {
        textTwo.style.color = '#900'
        textTwo.innerHTML = `Ви програли, комп’ютер загадав ${randomNumberTwo}`
    }
})