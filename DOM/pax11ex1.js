// Dado o seguinte código HTML:
{
  /* <html>
  <body>
    <div>Users:</div>
    <ul>
      <li>John</li>
      <li>Pete</li>
    </ul>
  </body>
</html>; */
}

// Utilizando as diferentes propiedades para recorrer o DOM, indica, polo menos, unha
// forma de acceder aos seguintes nodos:
// ● o nodo <div>
const div = document.body.firstElementChild;
console.log(div);

// ● o nodo <ul>
const ul = document.body.children[1];
console.log(ul);

// ● o segundo <li>
const li = ul.lastElementChild;
console.log(li);
