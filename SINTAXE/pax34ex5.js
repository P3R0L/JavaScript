// Inicializa unha variable a un número, calcula o seu factorial e mostra a resultado por consola. (5! = 5*4*3*2*1)
let num = 5;
let factorial = 1;
let resultado;

for (let i = num; i > 0; i--) {
  factorial = factorial * i;
  resultado = factorial;
}

console.log("(" + num + "! = " + resultado + ")");
