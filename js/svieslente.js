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



let scoresData = [];

scoresData = localStorage.getItem('scores');

let total = 0;
let sumA = 0;



const deleteDOM = document.querySelector('button.delete');

function plusAOne() {
    total++;
    result1DOM.textContent = total;
    sumA = `<p>${formatTime(Date.now())} → A komanda + 1 <button class="delete">Delete</button></p>`;
    summaryDOM.innerHTML += sumA;

    deleteDOM.addEventListener('click', () => {
        scoresData.splice(i, 1);
        localStorage.setItem('scores', JSON.stringify(scoresData));
    });
}



function plusATwo() {
    total += 2;
    result1DOM.textContent = total;
    sumA = `<p>${formatTime(Date.now())} → A komanda + 2 <button class="delete">Delete</button></p> `;
    summaryDOM.innerHTML += sumA;
    localStorage.setItem('scores', JSON.stringify(scoresData));
}
function plusAThree() {
    total += 3;
    result1DOM.textContent = total;
    sumA = `<p>${formatTime(Date.now())} → A komanda + 3 <button class="delete">Delete</button></p> `;
    summaryDOM.innerHTML += sumA;
    localStorage.setItem('scores', JSON.stringify(scoresData));
}
plus1aDOM.addEventListener('click', plusAOne);
plus2aDOM.addEventListener('click', plusATwo);
plus3aDOM.addEventListener('click', plusAThree);




let total2 = 0;
let sumB = 0;

function plusBOne() {
    total2++;
    result2DOM.textContent = total2;
    sumB = `<p>${formatTime(Date.now())} → B komanda + 1 <button type="button" class="delete">Delete</button></p> `;
    summaryDOM.innerHTML += sumB;
    localStorage.setItem('scores', JSON.stringify(scoresData));
}
function plusBTwo() {
    total2 += 2;
    result2DOM.textContent = total2;
    sumB = `<p>${formatTime(Date.now())} → B komanda + 2 <button class="delete">Delete</button></p> `;
    summaryDOM.innerHTML += sumB;
    localStorage.setItem('scores', JSON.stringify(scoresData));
}
function plusBThree() {
    total2 += 3;
    result2DOM.textContent = total2;
    sumB = `<p>${formatTime(Date.now())} → B komanda + 3 <button class="delete">Delete</button></p> `;
    summaryDOM.innerHTML += sumB;
    localStorage.setItem('scores', JSON.stringify(scoresData));
}
plus1bDOM.addEventListener('click', plusBOne);
plus2bDOM.addEventListener('click', plusBTwo);
plus3bDOM.addEventListener('click', plusBThree);




function formatTime(timeInMs) {

    const date = new Date(timeInMs);
    const y = date.getFullYear();
    const m = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const d = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const h = date.getHours();
    const mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${y} -${m} -${d} ${h}:${mn}:${s} `;
};