//Elabore um programa que leia as 4 notas de um aluno e calcule a média final.

const PromptSync = require("prompt-sync")();
const nota1 = Number(PromptSync("Digite a primeira nota:"));
const nota2 = Number(PromptSync("Digite a segunda nota:"));
const nota3 = Number(PromptSync("Digite a terceira nota:"));
const nota4 = Number(PromptSync("Digite a quarta nota:"));

let calc = (nota1 + nota2 + nota3 + nota4) / 4;
let int = Math.floor(calc);
let dec = (calc - int).toFixed(2);
if (dec <= 0.4) {
  calc = int;
} else if (dec >= 0.6) {
  calc = int + 1;
} else {
  calc = int + 0.5;
}

console.log(`Media final: ${calc}`);
