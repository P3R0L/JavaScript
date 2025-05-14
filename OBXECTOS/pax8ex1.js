// Mostra o día da semana (en letra) do 25 de xullo do ano actual.
const data = new Date(2025, 6, 25);

let dia = "";
switch (data.getDay()) {
  case 0:
    dia = "domingo";
    break;
  case 1:
    dia = "luns";
    break;
  case 2:
    dia = "martes";
    break;
  case 3:
    dia = "mércores";
    break;
  case 4:
    dia = "xoves";
    break;
  case 5:
    dia = "venres";
    break;
  case 6:
    dia = "sábado";
    break;
  default:
    dia = "ERROR";
    break;
}

console.log("O 25 de xullo de 2025 cae a " + dia);
