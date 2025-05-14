// Dada a seguinte constante, fai as operacións necesarias para que o primeiro carácter estea en maiúscula:
const cadea = "desenvolvemento web";
const novaCadea = cadea.toUpperCase().at(0) + cadea.substring(1, cadea.length);
console.log(novaCadea); // 'Desenvolvemento web'
