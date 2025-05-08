// Crea unha variable que almacene un día da semana de luns a domingo. En función do valor da variable mostra unha mensaxe indicando se o día é laborable ou non.
let diaDaSemana = "luns";

if (diaDaSemana === "sábado" || diaDaSemana === "domingo") {
  console.log("O " + diaDaSemana + " NON é un día laborable");
} else if (
  diaDaSemana === "luns" ||
  diaDaSemana === "martes" ||
  diaDaSemana === "mércores" ||
  diaDaSemana === "xoves" ||
  diaDaSemana === "venres"
) {
  console.log("O " + diaDaSemana + " SÍ é un día laborable");
} else {
  console.error("O día da semana é inválido");
}
