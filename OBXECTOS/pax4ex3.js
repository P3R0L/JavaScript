// Crea unha función á que se lle pase unha cadea de números e devolva unha cadea da mesma lonxitude formada por * e as últimas 4 cifras do parámetro de entrada.
function enmascarar(cadea) {
  let novaCadea = "";
  for (let i = 0; i < cadea.length - 4; i++) {
    novaCadea = novaCadea + "*";
  }
  novaCadea = novaCadea + cadea.substring(cadea.length - 4, cadea.length);
  return novaCadea;
}

console.log(enmascarar("1234123412347777")); // ************7777
