// Crea unha función á que se lle pase un mes (1-12) e un ano e devolva o número de
// días dese mes.
function calcularNumeroDias(mes, ano) {
  const mesesCon31 = [0, 2, 4, 6, 7, 9, 11]; // Índices de enero, marzo, etc.
  const mesCalculado = mes - 1;

  if (mesesCon31.includes(mesCalculado)) {
    return 31;
  } else if (mesCalculado === 1) {
    return (ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0 ? 29 : 28;
  } else {
    return 30;
  }
}

console.log(calcularNumeroDias(2, 2025));
