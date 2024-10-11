document.getElementById('button').addEventListener('click', function(event) {
    event.preventDefault();

    const minutes = parseInt(document.getElementById('input').value, 10);
    const timeDisplay = document.getElementById('time');
    
    if (isNaN(minutes) || minutes < 0) {
      timeDisplay.textContent = "Введіть правильне число!";
      timeDisplay.style.color = "red";
    } else {
      const hours = Math.floor(minutes / 60);
      const remainingMinutes = minutes % 60;
      timeDisplay.textContent = `${hours}:${remainingMinutes}`;
      timeDisplay.style.color = "black";
    }
  });