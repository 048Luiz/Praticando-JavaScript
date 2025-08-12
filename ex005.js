//Elabore um programa que leia um número e mostre o número anterior e o posterior

const prompt = require("prompt-sync")();

const number = Number(prompt("Diga um número:"));
const after = number + 1;
const before = number - 1;

console.log(`Número posterior é: ${after}`);
console.log(`Número anterior é: ${before}`);
