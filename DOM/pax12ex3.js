// Escribe o código para pintar as celas diagonais dunha táboa de vermello. Debes
// investigar en internet como cambiar a cor de fondo dunha cela mediante JavaScript.
const tbody = document.body.querySelector("tbody");
for (let i = 0; i < 5; i++) {
  const td = tbody.children[i].children[i];
  td.style.backgroundColor = "red";
}
