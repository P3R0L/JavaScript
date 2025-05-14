// Crea unha función á que se lle pase unha cadea e devolva a cadea en sentido inverso.
function reverseString(cadea) {
  let novaCadea = "";
  for (let i = 0; i < cadea.length; i++) {
    novaCadea = cadea.at(i) + novaCadea;
  }
  return novaCadea;
}

console.log(reverseString("I am a string")); // gnirts a ma I
