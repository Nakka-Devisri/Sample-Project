let currentPlayer = 'X';
const cells = document.querySelectorAll('.cell');
const resultDisplay=document.getElementById('result');
const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

// cells.forEach(cell => {
//     cell.addEventListener('click', handleClick, { once: true });
// });
for(let i=0;i<cells.length;i++){
    let cell=cells[i];
    cell.addEventListener('click', handleClick, { once: true });
}

function handleClick(event) {
    const cell = event.target;
    cell.textContent = currentPlayer;
    if (checkWin(currentPlayer)) {
        // setTimeout(() => alert(`${currentPlayer} Wins!`), 10);
        resultDisplay.textContent=`${currentPlayer} Wins!`;
        
    } else if (isDraw()) {
        resultDisplay.textContent=`Draw!`;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWin(player) {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].textContent === player;
        });
    });
}

function isDraw() {
    return [...cells].every(cell => {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
}

function restartGame() {
    currentPlayer = 'X';
    resultDisplay.textContent='';
    cells.forEach(cell => {
        cell.textContent = '';
        // cell.removeEventListener('click',handleClick);
        cell.addEventListener('click', handleClick, { once: true });
    });
}
