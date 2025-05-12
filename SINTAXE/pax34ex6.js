// Cálculo do IMC (índice de masa corporal). IMC = peso (kg) / [estatura (m)]²
// a. Almacena en variables o peso e altura de dúas persoas.
// b. Calcula o IMC das dúas persoas.
// c. Indica que persoa ten o maior IMC cunha cadea similar a: 'O IMC (25.3) da primeira persoa é maior que o da segunda persoa (22.5)!'
const peso1 = 72;
const altura1 = 1.79;
const imc1 = peso1 / altura1 ** 2;

const peso2 = 57;
const altura2 = 1.73;
const imc2 = peso2 / altura2 ** 2;

if (imc1 > imc2) {
  console.log(
    "O IMC (" +
      imc1 +
      ") da primeira persoa é maior que o da segunda persoa (" +
      imc2 +
      ")"
  );
} else {
  console.log(
    "O IMC (" +
      imc2 +
      ") da segunda persoa é maior que o da primeira persoa (" +
      imc1 +
      ")"
  );
}
