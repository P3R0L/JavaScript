// Escribe o código necesario para procesar unha cadea con información de voos
// como a do exemplo e mostrar a información por consola formateada como aparece
// na imaxe:
const flightsInfo =
  "_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure; scq93766109; svq2323639855;12:30";

// Fixarse que a información mostrada por consola está aliñada pola dereita.
function voosFormateados(info) {
  const voos = info.split("+");
  for (const voo of voos) {
    const [condicion, de, para, hora] = voo.split(";");

    const condicionFormateada = condicion.replaceAll("_", " ").trim();
    const from = de.trim().slice(0, 3).toUpperCase();
    const to = para.trim().slice(0, 3).toUpperCase();
    const horaFormateada = `(${hora.replace(":", "h")})`;

    const saida = `${condicionFormateada} ${from} ${to} ${horaFormateada}`;
    console.log(saida.padStart(45));
  }
}

voosFormateados(flightsInfo);
