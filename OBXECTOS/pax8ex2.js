// Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.
function calcularNumeroDias(mes, ano) {
  let mesCalculado = mes - 1;
  let dias;
  if (
    mesCalculado === 0 ||
    mesCalculado === 2 ||
    mesCalculado === 4 ||
    mesCalculado === 6 ||
    mesCalculado === 7 ||
    mesCalculado === 9 ||
    mesCalculado === 11
  ) {
    dias = 31;
    return dias;
  } else if (mesCalculado === 1) {
    if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0) {
      dias = 29;
      return dias;
    } else {
      dias = 28;
      return dias;
    }
  } else {
    dias = 30;
    return dias;
  }
}

console.log(calcularNumeroDias(2, 2024));
