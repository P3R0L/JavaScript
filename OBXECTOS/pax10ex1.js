// Crea unha función que reciba un elemento e un array como parámetros. A función
// debe devolver un novo array que conteña os índices onde aparece ese elemento no
// array
const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];

function indices(elemento, arrayElementos) {
  const novoArrayElementos = [];
  for (let i = 0; i < arrayElementos.length; i++) {
    if (arrayElementos[i] === elemento) {
      novoArrayElementos.push(i);
    }
  }
  return novoArrayElementos;
}

console.log(indices(1, numeros));
