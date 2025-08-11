//Elabore um programa que leia uma viajem em dias e horas e calcule e informe a duração total em horas.

const prompt = require("prompt-sync")();
const dias = Number(prompt("Quantos dias:"));
const horas = Number(prompt("Quantas horas:"));
const calc = dias * 24 + horas;
console.log(`Total de horas: ${calc}`);
