// Crea un documento HTML que conteña un elemento <ul>. Dende JavaScript crea 4
// elementos <li> e engádeos á lista <ul>, de tal forma que sexan visibles no
// navegador
const ul = document.body.querySelector("ul");
for (let i = 1; i < 5; i++) {
  const li = document.createElement("li");
  li.innerText = "Elemento " + i;
  ul.append(li);
}
