//Elabore um programa leia dois números e calcule e informe esse valor.

const prompt = require("prompt-sync")();
const number1 = Number(prompt("Digite um número:"));
const number2 = Number(prompt("Digite outro número:"));
const soma = number1 + number2;
console.log(`Resultado: ${soma}`);
