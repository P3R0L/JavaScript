// Crea unha función que dado o radio dun círculo, devolva a súa área. E fai outra
// función que reciba o radio e devolva o perímetro do círculo. Mostra por consola o
// resultado das funcións usando dúas cifras decimais.
function cacularAreaCirculo(radio) {
  return (Math.PI * Math.pow(radio, 2)).toFixed(2);
}

function calcularPerimetroCirculo(radio) {
  return (Math.PI * (radio * 2)).toFixed(2);
}

console.log(cacularAreaCirculo(3)); // Salida esperada: 28.27
console.log(calcularPerimetroCirculo(3)); // Salida esperada: 18.85
