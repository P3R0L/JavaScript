// Crea 3 variables e inicialízaas con 3 números diferentes. Mostra por pantalla o maior dos 3 números.
let x = 33;
let y = 29;
let z = 38;

if (x > y && x > z) {
  console.log("O maior dos 3 números é: " + x);
} else {
  if (y > z) {
    console.log("O maior dos 3 números é: " + y);
  } else {
    console.log("O maior dos 3 números é: " + z);
  }
}
