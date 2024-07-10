const h1DOM = document.querySelector('h1');
const buttonDOM = document.querySelector('button');


const introductionDOM = document.getElementsByClassName('introduction')[0];
const btnDOM = introductionDOM.getElementsByTagName('button');
const paragraphDOM = document.getElementById('paragraph');



function introduction(n = '_____') {
    paragraphDOM.insertAdjacentHTML('afterBegin', `<p>Sveiki, mano vardas ${n}</p>`);
}

for (let i = 0; i < btnDOM.length; i++) {
    btnDOM[i].addEventListener('click', () => introduction(btnDOM[i].innerText));
}

//btnDOM1.addEventListener('click', () => introduction(btnDOM1.innerText));
//btnDOM2.addEventListener('click', () => introduction(btnDOM2.innerText));
//btnDOM3.addEventListener('click', () => introduction(btnDOM3.innerText));
//btnDOM4.addEventListener('click', () => introduction(btnDOM4.innerText));






