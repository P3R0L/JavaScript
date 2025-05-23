// Descarga o código fonte 01-accesoNodos02.html e indica, polo menos, unha forma
// de acceder aos seguintes nodos, utilizando os métodos de acceso a nodos:
// ● O elemento con id “input2”.
console.log('Elemento con id "input2"');
const input2 = document.body.querySelector("input[id='input2']");
console.log(input2);

// ● A colección de parágrafos
console.log("Colección de parágrafos:\n");
const paragrafos = document.body.querySelectorAll("p");
for (const paragrafo of paragrafos) {
  console.log(paragrafo);
}

// ● Todos os parágrafos dentro do div con id “lipsum”.
console.log('Parágrafos dentro do div con id "lipsum":\n');
const divLipsum = document.body.querySelector("div[id='lipsum']");
const paragrafosLipsum = divLipsum.querySelectorAll("p");
for (const paragrafo of paragrafosLipsum) {
  console.log(paragrafo);
}

// ● O formulario
console.log("Formulario:\n");
const form = document.body.querySelector("form");
console.log(form);

// ● Todos os inputs
console.log("Inputs:\n");
const inputs = document.body.querySelectorAll("input");
for (const input of inputs) {
  console.log(input);
}

// ● Só os inputs con nome “sexo”.
console.log("Inputs con nome sexo:\n");
const inputsSexo = document.querySelectorAll("input[name='sexo']");
for (const input of inputsSexo) {
  console.log(input);
}

// ● Os items da lista con clase “important”.
console.log('Items da lista con clase "important"\n');
const items = document.querySelectorAll("li.important");
for (const item of items) {
  console.log(item);
}
