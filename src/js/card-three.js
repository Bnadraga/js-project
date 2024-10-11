let user = 0, computer = 0;
const userScoreElement = document.getElementById('user');
const computerScoreElement = document.getElementById('computer');
const resultBlock = document.getElementById('card-three-block');

const game = { Камінь: 'Ножиці', Ножиці: 'Папір', Папір: 'Камінь' };
const getComputerPlay = () => Object.keys(game)[Math.floor(Math.random() * 3)];

const play = (userPlay) => {
    const computerPlay = getComputerPlay();
    const result = userPlay === computerPlay ? 'Нічия!' :
        game[userPlay] === computerPlay ? (++user, 'Ви виграли!') : (++computer, 'Ви програли!');

    resultBlock.textContent = `Комп'ютер обрав: ${computerPlay}. ${result}`;
    resultBlock.style.color = result === 'Ви виграли!' ? 'green' : result === 'Ви програли!' ? 'red' : 'black';
    userScoreElement.textContent = user;
    computerScoreElement.textContent = computer;
};

document.getElementById('stone').onclick = () => play('Камінь');
document.getElementById('scissors').onclick = () => play('Ножиці');
document.getElementById('paper').onclick = () => play('Папір');
document.getElementById('card-three-btn').onclick = () => {
    const computerPlay = getComputerPlay();
    resultBlock.textContent = `Комп'ютер обрав: ${computerPlay}`;
    resultBlock.style.color = 'black';
};
