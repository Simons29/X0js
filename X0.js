let area = document.getElementById('area');
let cell = document.getElementsByClassName('cell');
let next = document.getElementById('meow');

let player = "x";
let stat = {
    'x': 0,
    'o': 0,
    'd': 0,
}
let Winsssition = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]
];

for(let i = 1; i <= 9; i++) {
    area.innerHTML += "<div class='cell' sss=" + i + "></div>";
}

for (let i = 0; i< cell.length; i++) {
    cell[i].addEventListener('click', Zanyato, false);
}

function Zanyato() {

    let data = [];
    
    if(!this.innerHTML) {
        this.innerHTML = player;
    }else {
        alert("Ячейка занята");
        return;
    }

    for(let i in cell){
        if(cell[i].innerHTML == player){
            data.push(parseInt(cell[i].getAttribute('sss')));
        }
    }

    if(Winner(data)) {
        stat[player] += 1;
        restart("Выиграл человек играющий за: " + player);
    }else {
        let draw = true;
        for(let i in cell) {
            if(cell[i].innerHTML == '') draw = false;
        }
        if(draw) {
            stat.d += 1;
            restart("Ничья");
        }
    }

    player = player == "x" ? "o" : "x";
    next.innerHTML = player.toUpperCase();
}

function Winner(data) {
    for(let i in Winsssition) {
        let win = true;
        for(let j in Winsssition[i]) {
            let id = Winsssition[i][j];
            let ind = data.indexOf(id);

            if(ind == -1) {
                win = false
            }
        }

        if(win) return true;
    }
    return false;
}

function restart(text) {
    
    alert(text);
    for(let i = 0; i < cell.length; i++) {
        cell[i].innerHTML = '';
    }
    updateStat();
}