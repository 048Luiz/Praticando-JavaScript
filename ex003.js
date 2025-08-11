//Elaborar um programa que leia o valor de um jantar. calcule e informe o valor do garçom (8%) e o valor total a ser pago.

const prompt = require("prompt-sync")();
const dinner = Number(prompt("Qual o valor do jantar?"));
const service = dinner * 0.08;
const value = dinner + service;
console.log(
  `Valor da taxa do garçom foi dê R$: ${service.toFixed(
    2
  )}, e o valor total foi dê R$ ${value.toFixed(2)}`
);
