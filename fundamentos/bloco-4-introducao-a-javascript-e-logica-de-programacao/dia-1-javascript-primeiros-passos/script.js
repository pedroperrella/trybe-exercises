// 1. Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. Faça programas para:
// Adição (a + b)
// Subtração (a - b)
// Multiplicação (a * b)
// Divisão (a / b)
// Módulo (a % b)
const a = 1;
const b = 2;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

// 2. Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
const a = 1;
const b = 2;
if (a > b) {
    console.log('a é maior que b');
} console.log('b é maior que a');

// 3. Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const a = 1;
const b = 2;
const c = 3;
if (a > b && a > c) {
    console.log('a é maior que b e c');
} else if (b > a && b > c) {
    console.log('b é maior que a e c');
} console.log('c é maior que a e b');

// 4. Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const a = -1;
if (a < 0) {
    console.log('negative');
} else if (a > 0) {
    console.log('positive')
} else {
    console.log('zero');
}

// 5. Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false , caso contrário. Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.
let a = 60;
let b = 50;
let c = 70;
if (a < 0 || b < 0 || c <0) {
    console.log('error')
} else if (a + b + c === 180) {
    console.log(true);
} else {
    console.log('false');
}

// 6. Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
const pecaXadrez = 'Bispo';
switch (pecaXadrez.toLowerCase()) {
    case 'torre':
        console.log('horizontal e vertical');
    break;
    case 'rainha':
        console.log('todos os movimentos');
    break;
    case 'bispo':
            console.log('diagonais');
    break;
    default:
        console.log('error');
    break;
}

// 7. Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
let nota = 96;
if (nota < 0 || nota > 100) {
    console.log('error');
} else if (nota >= 90) {
    console.log('A');
} else if (nota >= 80) {
    console.log('B');
} else if (nota >= 70) {
    console.log('C');
} else if (nota >= 60) {
    console.log('D');
} else if (nota >= 50) {
    console.log('E');
} else {
    console.log('F');
}

// 8. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
const a = 1;
const b = 2;
const c = 3;

let condicional = false;

if (a % 2 === 0 || b % 2 === 0 || c % 2 === 0) {
    condicional = true;
}

console.log(condicional);

// 9. Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .

const a = 1;
const b = 2;
const c = 3;

let condicional = false;

if (a % 2 !== 0 || b % 2 !== 0 || c % 2 !== 0) {
    condicional = true;
}

console.log(condicional);

// 10. Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
const custoDoProduto = 200;
const valorDeVenda = 1000;
const imposto = (valorDeVenda * 20) / 100

if (custoDoProduto < 0 && valorDeVenda < 0) {
    console.log('error')
} else {
    console.log((valorDeVenda - custoDoProduto - imposto) * 1000);
}

// 11. Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
const salario = 2000.00;
let aliquotaINSS;
let aliquotaIR;

//INSS

if (salario <= 1556.94) {
  aliquotaINSS = salario * 0.08;
} else if (salario <= 2594.92) {
  aliquotaINSS = salario * 0.09;
} else if (salario <= 5189.82) {
  aliquotaINSS = salario * 0.11;
} else {
  aliquotaINSS = 570.88;
}

const salarioBase = salario - aliquotaINSS;

// IRRF

if (salarioBase <= 1903.98) {
  aliquotaIR = 0;
} else if (salarioBase <= 2826.65) {
  aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05) {
  aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if (salarioBase <= 4664.68) {
  aliquotaIR = (salarioBase * 0.225) - 636.13;
} else {
  aliquotaIR = (salarioBase * 0.275) - 869.36;
};

console.log("Salário: " + (salarioBase - aliquotaIR));