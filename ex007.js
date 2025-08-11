//Elabore um programa para uma loja que leia o preço de um produto e informe as opções da pagamento. Calcule e informe o valor do pagamento a vista com 10% de desconto e o valor em 3x sem descontos.

const PromptSync = require("prompt-sync")();

const price = Number(PromptSync("Qual o valor da compra?"));
const desconto = price * 0.1;
const vista = price - desconto;
const parc = price / 3;

console.log(`Valor total: R$${price}`);
console.log(`Valor a vista (10% de desconto): R$${vista.toFixed(2)}`);
console.log(`Valor parcelado em 3x: R$${parc.toFixed(2)}`);
