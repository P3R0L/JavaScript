// Dado o seguinte obxecto:
const game = {
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
};

// a) Recorre o array game.scored e mostra por pantalla información do xogador
// que marcou e o número de gol marcado. Exemplo: “Gol 1: Lewandowski”.
function informacionGoles(obxecto) {
  for (let i = 1; i <= obxecto.scored.length; i++) {
    console.log("Gol " + i + ": " + obxecto.scored[i - 1]);
  }
}

informacionGoles(game);

// b. Crea un novo obxecto chamado scorers que conteña como propiedades o
// nome dos xogadores que marcaron e como valor o número de goles que
// marcaron respectivamente. Neste exemplo sería algo así: {Lewandowski: 2,
// Gnarby: 1, Hummels: 1}
function obxectoScorers(obxecto) {
  const scorers = {};
  for (const player of obxecto.scored) {
    scorers[player] = (scorers[player] || 0) + 1;
  }
  return scorers;
}

console.log(obxectoScorers(game));
