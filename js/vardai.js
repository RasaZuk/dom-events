const buttonsDOM = document.querySelectorAll('button');

const displayJoDOM = buttonsDOM[0];
const displayMaDOM = buttonsDOM[1];
const displayPeDOM = buttonsDOM[2];
const displayOnDOM = buttonsDOM[3];

const summaryDOM = document.querySelector('section > p');


function sayJonas() {
    console.log('Jonas');
}


displayJoDOM.addEventListener('click', () => {
    console.log('Jonas');
});

displayMaDOM.addEventListener('click', () => {
    console.log('Marytė');
});

displayPeDOM.addEventListener('click', () => {
    console.log('Petras');
});

displayOnDOM.addEventListener('click', () => {
    console.log('Ona');
});


summaryDOM.innerText = summaryDOM.innerHTML;




