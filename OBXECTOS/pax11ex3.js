// Crea unha función á que se lle pase unha frase con varias palabras e devolva a
// mesma frase coa primeira letra de cada palabra en maiúsculas e o resto de letras en
// minúsculas.
function primeiraLetraAMaiúsculas(frase) {
  const palabrasFrase = frase.split(" ");
  const palabrasMaiusculasFrase = [];
  for (let palabra of palabrasFrase) {
    palabrasMaiusculasFrase.push(
      palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase()
    );
  }
  const fraseDefinitiva = palabrasMaiusculasFrase.join(" ");
  return fraseDefinitiva;
}

frase = "malena estudia relacións laborais e recursos humanos";
console.log(primeiraLetraAMaiúsculas(frase));
