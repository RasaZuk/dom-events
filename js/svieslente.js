const buttonsDOM = document.querySelectorAll('button');

const plus1aDOM = buttonsDOM[0];
const plus2aDOM = buttonsDOM[1];
const plus3aDOM = buttonsDOM[2];
const result1DOM = document.querySelector('.a_komanda > .final1');

let total = 0;
function plusAOne() {
    total++;
    result1DOM.textContent = total;
}
function plusATwo() {
    total += 2;
    result1DOM.textContent = total;
}
function plusAThree() {
    total += 3;
    result1DOM.textContent = total;
}
plus1aDOM.addEventListener('click', plusAOne);
plus2aDOM.addEventListener('click', plusATwo);
plus3aDOM.addEventListener('click', plusAThree);



const plus1bDOM = buttonsDOM[3];
const plus2bDOM = buttonsDOM[4];
const plus3bDOM = buttonsDOM[5];
const result2DOM = document.querySelector('.b_komanda > .final2');

let total2 = 0;
function plusBOne() {
    total2++;
    result2DOM.textContent = total2;
}
function plusBTwo() {
    total2 += 2;
    result2DOM.textContent = total2;
}
function plusBThree() {
    total2 += 3;
    result2DOM.textContent = total2;
}
plus1bDOM.addEventListener('click', plusBOne);
plus2bDOM.addEventListener('click', plusBTwo);
plus3bDOM.addEventListener('click', plusBThree);