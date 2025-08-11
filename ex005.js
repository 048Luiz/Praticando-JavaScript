//Elabore um programa que leia um número e mostre o número anterior e o posterior

const prompt = require("prompt-sync")();

const number = Number(prompt("Diga um número:"));
const post = number + 1;
const ant = number - 1;

console.log(`Número posterior é: ${post}`);
console.log(`Número anterior é: ${ant}`);
