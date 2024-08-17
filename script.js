let score = 0;
let clickValue = 1;

document.getElementById('clicker').addEventListener('click', () => {
    score += clickValue;
    document.getElementById('score').innerText = score;
});

document.getElementById('upgrade-click').addEventListener('click', () => {
    if (score >= 10) {
        score -= 10;
        clickValue++;
        document.getElementById('score').innerText = score;
    }
});

document.getElementById('save').addEventListener('click', () => {
    localStorage.setItem('score', score);
    localStorage.setItem('clickValue', clickValue);
});

document.getElementById('load').addEventListener('click', () => {
    score = parseInt(localStorage.getItem('score')) || 0;
    clickValue = parseInt(localStorage.getItem('clickValue')) || 1;
    document.getElementById('score').innerText = score;
});
