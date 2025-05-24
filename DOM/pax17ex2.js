// Descarga o código fonte 03-propiedadesNodo02.html e mostra por consola:
// ● O número de ligazóns da páxina.
console.log("--- Número de ligazóns da páxina ---\n");
const ligazons = document.body.querySelectorAll("a");
console.log(ligazons.length);

// ● A dirección da penúltima ligazón.
console.log("--- Dirección da penúltima ligazón ---\n");
const penultimaLigazon = ligazons[5];
console.log(penultimaLigazon.href);

// ● O número de ligazóns que apuntan a http://proba
console.log('--- Número de ligazóns que apuntan a "http://proba" ---\n');
let numeroLigazons = 0;
for (const ligazon of ligazons) {
  if (ligazon.getAttribute("href") === "http://proba") {
    numeroLigazons++;
  }
}
console.log(numeroLigazons);

// ● O número de ligazóns do terceiro parágrafo.
console.log("--- Número de ligazóns do terceiro parágrafo ---\n");

const terceiroParagrafo = document.body.children[2];
const ligazonsTerceiroParagrafo =
  terceiroParagrafo.querySelectorAll("a").length;
console.log(ligazonsTerceiroParagrafo);

// ● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o
// texto de cor laranxa.
for (const ligazon of ligazons) {
  if (ligazon.href === "http://proba/") {
    ligazon.style.color = "orange";
  }
}
