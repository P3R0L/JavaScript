// Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor:
const game = {
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// Utilizando a desestruturación de obxectos crea as seguintes variables:
// a) team1: debe inicializarse co valor da propiedade team1 do obxecto inicial.
const team1 = game.odds.team1;
console.log(team1);

// b) draw: debe inicializarse co valor da propiedade x do obxecto inicial.
const draw = game.odds.x;
console.log(draw);

// c) team2: debe inicializarse co valor da propiedade team2 do obxecto inicial.
const team2 = game.odds.team2;
console.log(team2);
