// select button onclick function

const playersArray = [];

function display(playerName) {
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    for (let i = 0; i < playerName.length; i++){
        const name = playerName[i].name;
        const tr = document.createElement('tr');

        // li.innerText = `${i + 1} ${name}`;
        tr.innerHTML = `
            <td class="text-xl pr-4">${i + 1}</td>
            <td class="text-xl">${name}</td>
        `;       

        playersList.appendChild(tr);
    }
    
}
    
function selectPlayer(element) {
    const playerName = element.parentNode.children[0].innerText;
    
    const playerObj = {
        name: playerName
    }
    playersArray.push(playerObj);

    display(playersArray);
    
    element.setAttribute('disabled', true);
    element.classList.add('bg-gray-400');
    console.log(element);
}