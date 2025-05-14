// a. Xera un número enteiro aleatorio entre 0 e 3 (incluídos).
console.log(Math.floor(Math.random() * 4));

// b. Xera un número enteiro aleatorio entre 1 e 3 (incluídos).
console.log(Math.floor(Math.random() * 3 + 1));

// c. Crea unha función que devolva un número enteiro aleatorio entre os dous
// valores pasados como parámetros. Así, por exemplo, a seguinte instrución
// debe mostrar un número aleatorio entre 5 e 10 (incluídos):
// console.log(numeroAleatorio(5, 10));
function numeroAleatorio(min, max) {
  const num = max - min;
  return Math.floor(Math.random() * (num + 1) + min);
}

console.log(numeroAleatorio(5, 10));
