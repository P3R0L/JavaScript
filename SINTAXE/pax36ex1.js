// Crea unha función que reciba como parámetro un prezo e unha porcentaxe de desconto. A función debe calcular o prezo final aplicado o desconto e devolver este valor.
function calcularDesconto(prezo, desconto) {
  let prezoFinal = prezo - (prezo * desconto) / 100;
  return prezoFinal;
}

console.log(
  "Un café de 2.63€ cun desconto do 30% valería " +
    calcularDesconto(2.63, 30) +
    "€"
);
