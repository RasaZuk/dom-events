const buttonsDOM = document.querySelectorAll('button');

const plus1aDOM = buttonsDOM[0];
const plus2aDOM = buttonsDOM[1];
const plus3aDOM = buttonsDOM[2];
const plus1bDOM = buttonsDOM[3];
const plus2bDOM = buttonsDOM[4];
const plus3bDOM = buttonsDOM[5];

const result1DOM = document.querySelector('.a_komanda > .final1');
const result2DOM = document.querySelector('.b_komanda > .final2');

const summaryDOM = document.querySelector('section > div');


let total = 0;
let sumA = 0;

function plusAOne() {
    total++;
    result1DOM.textContent = total;
    sumA = `<p>&bull; A komanda +1</p>`;
    summaryDOM.innerHTML += sumA;
}
function plusATwo() {
    total += 2;
    result1DOM.textContent = total;
    sumA = `<p>&bull; A komanda +2</p>`;
    summaryDOM.innerHTML += sumA;
}
function plusAThree() {
    total += 3;
    result1DOM.textContent = total;
    sumA = `<p>&bull; A komanda +3</p>`;
    summaryDOM.innerHTML += sumA;
}
plus1aDOM.addEventListener('click', plusAOne);
plus2aDOM.addEventListener('click', plusATwo);
plus3aDOM.addEventListener('click', plusAThree);




let total2 = 0;
let sumB = 0;

function plusBOne() {
    total2++;
    result2DOM.textContent = total2;
    sumB = `<p>&bull; B komanda +1</p>`;
    summaryDOM.innerHTML += sumB;
}
function plusBTwo() {
    total2 += 2;
    result2DOM.textContent = total2;
    sumB = `<p>&bull; B komanda +2</p>`;
    summaryDOM.innerHTML += sumB;
}
function plusBThree() {
    total2 += 3;
    result2DOM.textContent = total2;
    sumB = `<p>&bull; B komanda +3</p>`;
    summaryDOM.innerHTML += sumB;
}
plus1bDOM.addEventListener('click', plusBOne);
plus2bDOM.addEventListener('click', plusBTwo);
plus3bDOM.addEventListener('click', plusBThree);

