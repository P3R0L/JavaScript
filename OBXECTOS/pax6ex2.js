// Crea unha función á que se lle pase como parámetro o número de minutos e
// devolva un string indicando a súa equivalencia en horas e minutos.
function conversor(minutos) {
  const horas = Math.floor(minutos / 60);
  const minutosRestantes = minutos % 60;
  return (
    minutos +
    " minutos son " +
    horas +
    " horas e " +
    minutosRestantes +
    " minutos."
  );
}

console.log(conversor(140));
