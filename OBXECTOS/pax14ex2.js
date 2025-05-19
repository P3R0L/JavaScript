// Dado un array con nomes de variables formados por dúas palabras separadas por
// “_”, fai as operacións necesarias para mostrar por consola os nomes das variables
// en formato camelCase. Por exemplo, se o array de entrada é [“first_name”, “
// last_NAME”], deberase mostrar por consola “firtsName” e “lastName”.
const array = ["first_name", "last_nAme"];

function toCamelCase(array) {
  const arrayDefinitivo = [];
  for (let item of array) {
    const palabras = item.split("_");
    let itemToCamelCase = [
      palabras[0],
      palabras[1].charAt(0).toUpperCase() + palabras[1].slice(1).toLowerCase(),
    ];
    arrayDefinitivo.push(itemToCamelCase.join(""));
  }
  return arrayDefinitivo;
}

console.log(toCamelCase(array));
