//Elabore um programa que leia uma viajem em dias e horas e calcule e informe a duração total em horas.

const prompt = require("prompt-sync")();
const days = Number(prompt("Quantos dias:"));
const hours = Number(prompt("Quantas horas:"));
const calc = days * 24 + hours;
console.log(`Total de horas: ${calc}`);
