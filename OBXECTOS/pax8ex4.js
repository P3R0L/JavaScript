// Crea unha función que reciba unha data como parámetro e devolva o número de
// días que pasaron dende que comezou o ano.
function contadorDeDias(data) {
  const inicioDeAno = new Date(data.getFullYear(), 0, 1);
  const diferenciaMs = data - inicioDeAno;
  const msDia = 1000 * 60 * 60 * 24;
  return Math.floor(diferenciaMs / msDia);
}

let data1 = new Date(2025, 4, 14);
console.log(contadorDeDias(data1));
