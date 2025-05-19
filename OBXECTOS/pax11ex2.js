//Dado o array froitas fai os seguintes apartados co método splice:
const froitas = ["peras", "mazás", "kiwis", "plátanos", "mandarinas"];
console.log("Array inicial:\n" + froitas.join(", "));

// a. Elimina as mazás.
froitas.splice(1, 1);
console.log("Eliminamos as mazás:\n" + froitas.join(", "));

// b. Engade laranxas e sandía detrás dos plátanos.
froitas.splice(3, 0, "laranxas", "sandía");
console.log(
  "Engadimos laranxas e sandía detrás dos plátanos:\n" + froitas.join(", ")
);

// c. Quita os kiwis e pon no seu lugar cereixas e nésperas.
froitas.splice(1, 1, "cereixas", "nésperas");
console.log(
  "Quitamos os kiwis e poñemos no seu lugar cereixas e nésperas:\n" +
    froitas.join(", ")
);

// Despois de realizar cada operación mostra por pantalla a lista de froitas do array
// separadas por unha coma e un espazo. Por exemplo, inicialmente o array debe
// mostrarse como “peras, mazás, kiwis, plátanos, mandarinas”.
