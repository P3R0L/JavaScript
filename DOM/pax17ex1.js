// Descarga o código fonte 03-propiedadesNodo01.html e indica, polo menos, unha
// forma de acceder ao seguinte contido e mostralo por consola:
// ● O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:
console.log(
  '--- innerHTML, innerText e textContent da etiqueta "Escolle sexo" ---\n'
);
const labelSexo = document.body.querySelector("form").children[3];
console.log(labelSexo.innerHTML);
console.log(labelSexo.innerText);
console.log(labelSexo.textContent);

// ● O valor do primeiro input de sexo
console.log("--- Valor do primeiro input de sexo ---\n");
const valorPrimeiroInputSexo = labelSexo.querySelector("input").value;
console.log(valorPrimeiroInputSexo);

// ● O valor do sexo que estea seleccionado.
console.log("--- Valor do sexo que estea seleccionado ---\n");
const inputsSexo = labelSexo.querySelectorAll("input");
for (const input of inputsSexo) {
  if (input.checked) {
    console.log(input.value);
  }
}

// ● O texto de cada un dos elementos <li>
console.log("--- Texto de cada un dos elementos <li> ---\n");
const lis = document.body.querySelectorAll("li");
for (const li of lis) {
  console.log(li.innerText);
}

// ● Indica cantos elementos <li> hai.
console.log("--- Número de elementos <li> ---\n");
console.log(lis.length);

// ● Indica o valor do atributo data-widget-name
console.log("--- Valor do atributo data-widget-name ---\n");
const widgetName = document.body.querySelector("[data-widget-name='contedor']");
console.log(widgetName.dataset.widgetName);
