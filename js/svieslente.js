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

const localData = localStorage.getItem('scores');
let scoresData = [];

if (localData !== null) {
    scoreData = JSON.parse(localData);
    renderList();
}


let total = 0;
let sumA = 0;

function plusAOne() {
    total++;
    result1DOM.textContent = total;
    sumA = `<p>${Date.now()}; A komanda + 1;</p> `;
    summaryDOM.innerHTML += sumA;
}
function plusATwo() {
    total += 2;
    result1DOM.textContent = total;
    sumA = `<p>${new Date()}; A komanda + 2</p> `;
    summaryDOM.innerHTML += sumA;
}
function plusAThree() {
    total += 3;
    result1DOM.textContent = total;
    sumA = `<p>A komanda + 3</p> `;
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
    sumB = `<p>B komanda + 1</p> `;
    summaryDOM.innerHTML += sumB;
}
function plusBTwo() {
    total2 += 2;
    result2DOM.textContent = total2;
    sumB = `<p>B komanda + 2</p> `;
    summaryDOM.innerHTML += sumB;
}
function plusBThree() {
    total2 += 3;
    result2DOM.textContent = total2;
    sumB = `<p>B komanda + 3</p> `;
    summaryDOM.innerHTML += sumB;
}
plus1bDOM.addEventListener('click', plusBOne);
plus2bDOM.addEventListener('click', plusBTwo);
plus3bDOM.addEventListener('click', plusBThree);




submitButtonDOM.addEventListener('click', e => {
    e.prevent.Default();

    scoresData.push({
        createdAt: Date.now(),
        text: summaryDOM.value,
        state: 'scores',
    });
    localStorage.setItem('scores', JSON.stringify(scoresData));
    renderList();
});

function renderList() {
    if (scoresData.length === 0) {
        renderEmptyList();
    } else {
        renderTaskList();
    }
}

function renderTaskList() {
    let HTML = '';

    for (const scores of scoresData) {
        HTML += `

        <section data-state="${scores.state}">
            <div>${formatTime(scores.createdAt)}</div>
            <div>${scores.text}</div>
            <div>
                <button>Delete</button>
            </div>
        </section>`;
    }

    const sectionDOM = document.querySelector('section');

    for (let i = 0; i < sectionDOM.length; i++) {
        const sectionDOM = sectionDOM[i];

        const deleteDOM = sectionDOM.querySelector('button.delete');
        deleteDOM.addEventListener('click', () => {
            scoresData.splice(i, 1);
            renderList();
        })
    }
}


function formatTime(timeInMs) {

    const date = new Date(timeInMs);
    const y = date.getFullYear();
    const m = (date.getMonth() < 9 ? '0' : '') + (date.getMonth() + 1);
    const d = (date.getDate() < 10 ? '0' : '') + date.getDate();
    const h = date.getHours();
    const mn = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();
    const s = (date.getSeconds() < 10 ? '0' : '') + date.getSeconds();

    return `${y} -${m} -${d} ${h}:${mn}:${s} `;

}





