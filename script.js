let fields = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
]


currentPlayer = 0;
gameIsFinished = false;


function init() {
    renderTICTACTOE();
}


function renderTICTACTOE() {
    document.getElementById('container').innerHTML = '';
    for (let i = 0; i < fields.length; i++) {
        let content = fields[i];
        document.getElementById('container').innerHTML +=
            `<div id=field${i} onclick="setField(${i})" class="field">
        </div>`
    }
}


function choosePlayer1Cross() {
    if ((gameIsFinished == false && currentPlayer == 0)) {
        currentPlayer = 1;
        document.getElementById('chooseCross').classList.add('ChoosePlayerdropfilterBoxshadow');
        document.getElementById('chooseCircle').classList.remove('ChoosePlayerdropfilterBoxshadow');
        document.getElementById('choosePlayerText').innerHTML = 'Spieler Kreuz ist am Zug';
    }
}

function choosePlayer2Circle() {
    if ((gameIsFinished == false && currentPlayer == 0)) {
        currentPlayer = 2;
        document.getElementById('chooseCircle').classList.add('ChoosePlayerdropfilterBoxshadow');
        document.getElementById('chooseCross').classList.remove('ChoosePlayerdropfilterBoxshadow');
        document.getElementById('choosePlayerText').innerHTML = 'Spieler Kreis ist am Zug';
    }
}


function setField(feld) {
    if (noCurrentPlayer()) {
        alert('Spieler auswählen')
    } else if (fieldIsTaken(feld)) {
        alert('Feld bereits vergeben');
    } else if (gameIsFinished == true) {
        alert('Spiel ist vorbei. Bitte neu starten')
    } else if (player1CrossIsChosen() && fieldIsEmpty(feld)) {
        document.getElementById(`field${feld}`).innerHTML = crossHTML();
        fields[feld] = 1;
        currentPlayer = 0;
        choosePlayer2Circle();
    } else if (player2CircleIsChosen() && fieldIsEmpty(feld)) {
        document.getElementById(`field${feld}`).innerHTML = circleHTML();
        fields[feld] = 4;
        currentPlayer = 0;
        choosePlayer1Cross();
    }
    searchForWinner();
}


function noCurrentPlayer() {
    return currentPlayer == 0;
}


function fieldIsTaken(feld) {
    return !(fields[feld] == 0);
}


function player1CrossIsChosen() {
    return currentPlayer == 1;
}


function player2CircleIsChosen() {
    return currentPlayer == 2;
}


function fieldIsEmpty(feld) {
    return fields[feld] == 0
}


function searchForWinner() {
    if (
        (fields[0] + fields[1] + fields[2] == 3) ||
        (fields[3] + fields[4] + fields[5] == 3) ||
        (fields[6] + fields[7] + fields[8] == 3) ||
        (fields[0] + fields[3] + fields[6] == 3) ||
        (fields[1] + fields[4] + fields[7] == 3) ||
        (fields[2] + fields[5] + fields[8] == 3) ||
        (fields[0] + fields[4] + fields[8] == 3) ||
        (fields[2] + fields[4] + fields[6] == 3)
    ) {
        document.getElementById('choosePlayerText').innerHTML = 'Spieler Kreuz hat gewonnen!';
        gameIsFinished = true;
    }
    else if (
        (fields[0] + fields[1] + fields[2] == 12) ||
        (fields[3] + fields[4] + fields[5] == 12) ||
        (fields[6] + fields[7] + fields[8] == 12) ||
        (fields[0] + fields[3] + fields[6] == 12) ||
        (fields[1] + fields[4] + fields[7] == 12) ||
        (fields[2] + fields[5] + fields[8] == 12) ||
        (fields[0] + fields[4] + fields[8] == 12) ||
        (fields[2] + fields[4] + fields[6] == 12)
    ) {
        document.getElementById('choosePlayerText').innerHTML = 'Spieler Kreis hat gewonnen!'
        gameIsFinished = true;
    }
}


function newGame() {
    currentPlayer = 0;
    gameIsFinished = false;
    fields = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    document.getElementById('chooseCircle').classList.remove('ChoosePlayerdropfilterBoxshadow');
    document.getElementById('chooseCross').classList.remove('ChoosePlayerdropfilterBoxshadow');
    document.getElementById('choosePlayerText').innerHTML = 'Bitte Spieler auswählen';
    renderTICTACTOE();
}


//---------------------HTML----------------------------------


function crossHTML() {
    return `
        <svg width="100" height="100" viewBox="0 0 100 100">
            <g transform="rotate(45 50 50)">
              <rect x="45" y="10" width="10" height="80" fill="black" rx="5" ry="5"/>
              <rect x="10" y="45" width="80" height="10" fill="black" rx="5" ry="5"/>
            </g>
        </svg>
        `
}


function circleHTML() {
    return `
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="35" stroke="black" stroke-width="10" fill="none"/>
          </svg>
        `
}

















