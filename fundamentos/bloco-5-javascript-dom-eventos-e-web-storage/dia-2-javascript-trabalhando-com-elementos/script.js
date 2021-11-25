// PRIMEIRA PARTE
// 1. Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;
const elementH1 = document.createElement('h1');
elementH1.innerText = 'Exercício 5.2 - JavaScript DOM';
document.body.appendChild(elementH1);

// 2. Adicione a tag main com a classe main-content como filho da tag body ;
const elementMain = document.createElement('main');
elementMain.className = 'main-content';
document.body.appendChild(elementMain);

// 3.Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
const elementSection = document.createElement('section');
elementSection.className = 'center-content';
elementMain.appendChild(elementSection);

// 4. Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
const elementParagraph = document.createElement('p');
elementParagraph.innerText = 'Tem que ter o DOM!!!'
elementSection.appendChild(elementParagraph);

// 5.Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
const elementSection2 = document.createElement('section');
elementSection2.className = 'left-content';
elementMain.appendChild(elementSection2);

// 6. Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
const elementSection3 = document.createElement('section');
elementSection3.className = 'right-content';
elementMain.appendChild(elementSection3);

// 7. Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;
const elementImage = document.createElement('img');
elementImage.className = 'small-image';
elementImage.src = 'https://picsum.photos/200';
elementSection2.appendChild(elementImage);

// 8. Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;
const elementList = document.createElement('ul');
elementSection3.appendChild(elementList);
for (let num = 0; num <= 10; num += 1) {
  const elementListNum = document.createElement('li');
  elementListNum.innerHTML = [num];
  elementList.appendChild(elementListNum);
}

// 9.Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.
for (let i = 0; i < 3; i += 1) {
    const elementH3 = document.createElement('h3');
    elementH3.innerHTML = i;
    elementMain.appendChild(elementH3);
}

// SEGUNDA PARTE
// 1. Adicione a classe title na tag h1 criada;
document.querySelector('h1').className = 'title';

// 2. Adicione a classe description nas 3 tags h3 criadas;
const elementsH3List = document.getElementsByTagName('h3');
for (let index = 0; index < 3; index += 1) {
    elementsH3List[index].className = 'description';
}

// 3.Remova a section criado no passo 5 (aquele que possui a classe left-content ). Utilize a função .removeChild() ;
elementMain.removeChild(elementSection2);

// 4. Centralize a section criado no passo 6 (aquele que possui a classe right-content ). Dica: para centralizar, basta configurar o margin-right: auto da section ;
const centralizeSection = document.getElementsByClassName('right-content')[0];
centralizeSection.style.marginRight = 'auto';

// 5.Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content ) para a cor verde;
const changeBackground = document.getElementsByClassName('center-content')[0];
changeBackground.parentNode.style.backgroundColor = 'orange';

// 6. Remova os dois últimos elementos ( nove e dez ) da lista criada no passo 8.
document.querySelector('ul').lastElementChild.remove();
document.querySelector('ul').lastElementChild.remove();