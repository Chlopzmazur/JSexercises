var newGameBtn = document.getElementById('js-newGameButton'),
    newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement'),
    pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors'),
    playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints'),
    playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult'),
    gameState = 'notStarted', //started || ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

function setGameElements() {
    switch (gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
        break;
    case 'ended':
        newGameBtn.innerText = 'Play again';
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
    }
}
setGameElements();

function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function newGame() {
    player.name = prompt('Please enter your name', 'Bob');
    if (player.name) {
        player.score = computer.score = 0;
        gameState = 'started';
        setGameElements();
        playerNameElem.innerHTML = player.name;
        setGamePoints();
    }
}

function checkRoundWinner(playerPick, computerPick) {
    playerResultElem.innerHTML = computerResultElem.innerHTML = '';

    var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis
    } else if (
            (computerPick == 'rock' && playerPick == 'scissors') ||
            (computerPick == 'scissors' && playerPick == 'papper') ||
            (computerPick == 'papper' && playerPick == 'rock')
    ) {
        winnerIs = 'computer';
    }

    if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Win!";
        player.score++;
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Win!";
        computer.score++;
    } else if (winnerIs == 'none') {
        computerResultElem.innerHTML = "Draw!";
        playerResultElem.innerHTML = "Draw!";
    }
    setGamePoints();
}

function getComputerPick() {
    var possiblePicks = ['rock', 'papper', 'scissors'];
    return possiblePicks[Math.floor(Math.random() * 3)];
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();

    if (player.score === 10) {
        alert('You won! ' + player.score + ' to ' + computer.score);
        gameState = 'ended';
        setGameElements();
    } else if (computer.score === 10) {
        alert('You lost! ' + computer.score + ' to ' + player.score);
        gameState = 'ended';
        setGameElements();
    }

    switch (playerPick) {
    case 'rock':
        playerPickElem.innerHTML = '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>' + playerPick;
        break;
    case 'papper':
        playerPickElem.innerHTML = '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>' + playerPick;
        break;
    case 'scissors':
        playerPickElem.innerHTML = '<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>' + playerPick;
        break;
    }

    switch (computerPick) {
    case 'rock':
        computerPickElem.innerHTML = '<i class="fa fa-hand-rock-o" aria-hidden="true"></i>' + computerPick;
        break;
    case 'papper':
        computerPickElem.innerHTML = '<i class="fa fa-hand-paper-o" aria-hidden="true"></i>' + computerPick;
        break;
    case 'scissors':
        computerPickElem.innerHTML = '<i class="fa fa-hand-scissors-o" aria-hidden="true"></i>' + computerPick;
        break;
    }
    checkRoundWinner(playerPick, computerPick);
}

newGameBtn.addEventListener('click', newGame);
pickRock.addEventListener('click', function () { playerPick('rock'); });
pickPaper.addEventListener('click', function () { playerPick('papper'); });
pickScissors.addEventListener('click', function () { playerPick('scissors'); });