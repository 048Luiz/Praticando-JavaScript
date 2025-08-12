//Elabore um programa que divida a conta da pizza em números de clientes.

const PromptSync = require("prompt-sync")();
const pizza = PromptSync("Qual o valor da pizza?");
const customers = PromptSync("Quantos clientes vão pagar?");
const calc = pizza / customers;
console.log(`Valor de cada cliente: R$:${calc.toFixed(2)}`);
