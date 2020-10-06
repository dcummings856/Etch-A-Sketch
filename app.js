let container = document.querySelector('#container')
let btnSet = document.querySelector('.btn-set');
let btnClear = document.querySelector('.btn-clear');
let etchasketch = document.querySelector('.etchasketch');


const createGrid = (num) => {
    for (let i = 0; i <= num; i++) {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j <= num; j++) {
            let square = document.createElement('div');
            square.className = 'square';
            square.id = 'square';
            row.appendChild(square);
        }
        container.appendChild(row);
    }
};

const clearGrid = (num) => {
    for (let i = 100; i >= num; i--) {
        let row = document.querySelector('#container > .row');
        for (let j = 100; j >= num; j--) {
            let square = document.querySelector('#container > .row > .square')
            row.removeChild(square);
        }
        container.removeChild(row);
    }
};

container.addEventListener('mouseover', (e) => {
    e.target.style.backgroundColor = "white";
})

btnSet.addEventListener('mouseover', () => {
    btnSet.style.backgroundColor = "rgb(210,210,210)";
})

btnSet.addEventListener('mouseout', () => {
    btnSet.style.backgroundColor = "rgb(239,239,239)";
})

btnSet.addEventListener('click', () => {
    container.removeChild(etchasketch);
    container.style.cssText = 'margin: 0px 450px; top: 50%; left: 20%; border: 10px solid rgb(95, 82, 26);';
    createGrid(100);
})

btnClear.addEventListener('click', () => {
    container.appendChild(etchasketch);
    container.style.cssText = 'border: solid white';
    clearGrid(0);
})