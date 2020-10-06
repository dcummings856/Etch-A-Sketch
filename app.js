let container = document.querySelector('#container')
let btnSet = document.querySelector('.btn-set');
let btnReset = document.querySelector('.btn-reset');
let btnClear = document.querySelector('.btn-clear');


const createGrid = (num) => {
    if (num > 100) {
        return alert('ERROR NO MORE THAN 100');
    }
    const container = document.querySelector('#container')
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

const removeGrid = (num) => {
    const container = document.querySelector('#container')
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
    createGrid(100);
})

btnClear.addEventListener('click', () => {
    removeGrid(0);
})