// Imaxinar que se recolle a seguinte información relativa a un xogo dun servidor web:
const players = [
  [
    "Neuer",
    "Pavard",
    "Martinez",
    "Alaba",
    "Davies",
    "Kimmich",
    "Goretzka",
    "Coman",
    "Muller",
    "Gnarby",
    "Lewandowski",
  ],
  [
    "Burki",
    "Schulz",
    "Hummels",
    "Akanji",
    "Hakimi",
    "Weigl",
    "Witsel",
    "Hazard",
    "Brandt",
    "Sancho",
    "Gotze",
  ],
];

// Utilizando o contido aprendido sobre arrays, proporciona unha única sentencia
// JavaScript para cada unha das seguintes instrucións:
// a. Crea as variables players1, players2 que conteñan un array cos xogadores
// de cada equipo. Así, players1 terá os xogadores do primeiro equipo e
// players2 os do segundo equipo.
const [players1, players2] = players;
console.log("a)");
console.log(players1);
console.log(players2);

// b.O primeiro xogador do array é o porteiro e o resto son xogadores de campo.
// Crea unha variable chamada gk que conteña o porteiro do primeiro equipo e
// unha variable de tipo array chamada fieldPlayers que conteña o resto de
// xogadores do equipo.
let gk, rest;
[gk, ...fieldPlayers] = players1;
console.log("b)");
console.log(gk);
console.log(fieldPlayers);

// c. Crea un array allPlayers que conteña os xogadores dos dous equipos.
const allPlayers = [...players1, ...players2];
// const allPlayers = players1.concat(players2);
console.log("c)");
console.log(allPlayers);

// d.O primeiro equipo substituíu os xogadores iniciais por 'Thiago', 'Coutinho',
// 'Periscic'. Crea unha nova variable de tipo array chamada players1Final que
// conteña todos os xogadores: os iniciais e tamén os 3 novos.
let players1Final = [...players1, "Thiago", "Coutinho", "Periscic"];
console.log("d)");
console.log(players1Final);
