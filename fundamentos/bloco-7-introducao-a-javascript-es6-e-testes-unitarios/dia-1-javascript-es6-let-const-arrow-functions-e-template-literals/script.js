// PARTE 1
// EXERCICIO 1
function testingScope(escopo) {
    if (escopo === true) {
        var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
        console.log(ifScope);
    } else {
        var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
    console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// - Modifique a estrutura da função para que ela seja uma arrow function.
// - Modifique as concatenações para template literals.

const testingScope = escopo => {
    if (escopo === true) {
        let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
        ifScope = `{$ifScope} ótimo, fui utilizada no escopo!`;
        console.log(ifScope);
    } else {
        let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
        console.log(elseScope);
    }
}
testingScope(true);

// EXERCICIO 2

// Utilize template literals para que a chamada console.log(<seu código>oddsAndEvens<seu código>); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".

// Referencias: 
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function

const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const sortFunction = () => console.log(`Os números ${oddsAndEvens.sort((a, b) => a - b)} se encontram ordenados de forma crescente!`);

sortFunction();

// PARTE 2
// EXERCICIO 1

// Crie uma função que receba um número e retorne seu fatorial.

const fatorialNumber = number => {
    let multiplyNumber = 1;
    for (let i = 1; i <= number; i += 1) {
        multiplyNumber = multiplyNumber * i;
    }
    return multiplyNumber;
}
console.log(fatorialNumber(5));

// EXERCICIO 2

// Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggestWord = string => {
  let stringArray = string.split(' ');
  let counter = 0;
  let biggestWordArray = '';
    for (let i = 0; i < stringArray.length; i += 1) {
        if (stringArray[i].length > counter) {
            counter = stringArray[i].length;
            biggestWordArray = stringArray[i];
        }
    }
console.log(biggestWordArray);
}
biggestWord('Exemplo para demonstrar a resolução do exercício')