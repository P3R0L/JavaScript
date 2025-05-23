//  Descarga o código fonte 01-accesoNodos01.html e indica, polo menos, unha forma
// de acceder aos seguintes nodos, utilizando os métodos de acceso a nodos:
// ● A táboa con id="age-table".
const taboaIdade = document.body.querySelector("#age-table");
console.log(taboaIdade);

// ● Todos os elementos label dentro da táboa (debería haber 3).
const labels = taboaIdade.querySelectorAll("label");
for (const label of labels) {
  console.log(label);
}

// ● O primeiro td da táboa.
const td = taboaIdade.querySelector("td");
console.log(td);

// ● O formulario con name="search".
const formSearch = document.body.querySelector("form[name='search']");
console.log(formSearch);

// ● O primeiro input do formulario anterior.
const firstInput = formSearch.querySelector("input");
console.log(firstInput);

// ● O último input do formulario do apartado anterior.
const lastInput = formSearch.querySelector("input[value='Search!']");
console.log(lastInput);
