//Elabore um programa que leia as 4 notas de um aluno e calcule a média final.

const PromptSync = require("prompt-sync")();
const grade1 = Number(PromptSync("Digite a primeira nota:"));
const grade2 = Number(PromptSync("Digite a segunda nota:"));
const grade3 = Number(PromptSync("Digite a terceira nota:"));
const grade4 = Number(PromptSync("Digite a quarta nota:"));

let calc = (grade1 + grade2 + grade3 + grade4) / 4;
let whole = Math.floor(calc);
let decimal = (calc - whole).toFixed(2);
if (decimal <= 0.4) {
  calc = whole;
} else if (decimal>= 0.6) {
  calc = whole + 1;
} else {
  calc = whole + 0.5;
}

console.log(`Media final: ${calc}`);
