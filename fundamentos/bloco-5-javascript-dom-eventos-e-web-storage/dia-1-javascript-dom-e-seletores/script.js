// Crie uma função que mude o texto na tag <p> para uma descrição de como você se vê daqui a 2 anos.
function changeText (){
document.getElementsByTagName('p')[1].innerText = 'Engenheiro de Software Pleno da XP!';
}

// Crie uma função que mude a cor do quadrado amarelo para o verde da Trybe (rgb(76,164,109)).
function changeBackground (){
document.getElementsByClassName('main-content')[0].style.background = 'rgb(76, 164, 109)';
}

// Crie uma função que mude a cor do quadrado vermelho para branco.
function changeBox () {
document.getElementsByClassName('center-content')[0].style.background = 'white';
}

// Crie uma função que corrija o texto da tag <h1>.
function changePhrase() {
document.getElementsByClassName('title')[0].innerText = 'Exercício 5.1 - JavaScript';
}

// Crie uma função que modifique todo o texto da tag <p> para maiúsculo.
function upperCase () {
document.getElementsByTagName('p')[0].innerHTML = document.getElementsByTagName('p')[0].innerHTML.toUpperCase();
}

// Crie uma função que exiba o conteúdo de todas as tags <p> no console.
function showAllTags () {
let tagsParagraphs = document.getElementsByTagName("p");
for(let i = 0; i < tagsParagraphs.length; i += 1){
console.log(tagsParagraphs[i].innerText);
}
}

