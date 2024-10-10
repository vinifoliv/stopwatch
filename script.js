const display = document.getElementById('display');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

let startTime, difference, timeInterval, running = false;

// Event handlers
startButton.addEventListener('click', () => {
    if (!running) {
        running = true;
        startTime = Date.now();
        timeInterval = setInterval(updateTime, 10);
    }
    else running = true;
});

stopButton.addEventListener('click', () => {
    if (running) { 
        clearInterval(timeInterval);
        running = false;
    }
    else alert('The stopwatch is not running...');
});

resetButton.addEventListener('click', () => {
    running = false;
    clearInterval(timeInterval);
    display.innerHTML = '00:00:00';
});

// Miscellanea
function updateTime() {
    difference = Date.now() - startTime;

    let minutes = Math.floor((difference % (1000 * 60 *60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    let milisseconds = Math.floor((difference % 1000) / 10);
    
    display.innerHTML = `${minutes}:${seconds}:${milisseconds}`;
}