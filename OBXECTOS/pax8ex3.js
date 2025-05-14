//  Crea unha función á que se lle pase unha data e que devolva true se é fin de
// semana.
function eFinDeSemana(data) {
  if (data.getDay() === 5 || data.getDay() === 6) {
    return true;
  } else {
    return false;
  }
}

let data1 = new Date(2025, 4, 14);
let data2 = new Date(2025, 4, 17);
console.log(eFinDeSemana(data1));
console.log(eFinDeSemana(data2));
