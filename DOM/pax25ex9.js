// Dada unha lista como a seguinte, escribe o código que engada o número de
// descendentes.
function contarDescendientes(li) {
  const sublista = li.querySelector("ul");

  if (!sublista) {
    return 0;
  }

  let total = 0;
  const hijos = sublista.children;

  for (let hijo of hijos) {
    if (hijo.tagName === "LI") {
      total += 1 + contarDescendientes(hijo);
    }
  }

  li.firstChild.textContent += ` [${total}]`;

  return total;
}

const listaRaiz = document.getElementById("listaAnimais");
const elementosPrimerNivel = listaRaiz.children;

for (let li of elementosPrimerNivel) {
  contarDescendientes(li);
}
