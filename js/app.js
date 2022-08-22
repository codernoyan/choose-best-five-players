// adding player name to array as an object
const playersArray = [];

// display player names
function display(playerName) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    for (let i = 0; i < playerName.length; i++){
        const name = playerName[i].name;
        const li = document.createElement('li');
        
        li.innerHTML = `
            <span class="text-xl font-semibold pr-4 text-slate-300">${i + 1}.</span>
            <span class="text-xl text-slate-200">${name}</span>
        `;
        li.classList.add('py-2')

        playersList.appendChild(li);
    }
    
}

// select button onclick function
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    
    const playerObj = {
        name: playerName
    }
    playersArray.push(playerObj);
    
    if (playersArray.length > 5) {
        alert('You cannot add more than 5 player.');
        element.setAttribute('disabled', true);
        return;
    }
    display(playersArray);

    element.setAttribute('disabled', true);
    element.classList.add('bg-gray-400');
    console.log(playersArray);
}

// Players budget calculation of per player
document.getElementById('btn-calculate').addEventListener('click', function () {
    const perPlayerCost = getInputValueById('per-player-cost');
    
    if (perPlayerCost < 0 || isNaN(perPlayerCost)) {
        alert('Invalid input value');
        return;
    }

    const totalPlayerExpenses = perPlayerCost * 5;
    setTextElementValueById('player-expenses', totalPlayerExpenses);
})

// Players budget calculate total
document.getElementById('btn-total-calculate').addEventListener('click', function () {
    const playerExpenses = getTextElementValueById('player-expenses');
    const managerCostAmount = getInputValueById('manager-cost-amount');

    // check validation
    if (managerCostAmount < 0 || isNaN(managerCostAmount)) {
        alert('Invalid input value');
        return;
    }

    const coachCostAmount = getInputValueById('coach-cost-amount');

    // check validation
    if (coachCostAmount < 0 || isNaN(coachCostAmount)) {
        alert('Invalid input value');
        return;
    }

    // calculate final total amount
    const finalTotalAmount = playerExpenses + managerCostAmount + coachCostAmount;
    setTextElementValueById('final-total', finalTotalAmount);
})