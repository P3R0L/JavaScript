// Imaxinar que a variable elemento fai referencia a un elemento do DOM e text é
// unha variable con unha cadea de texto que inclúe etiquetas HTML. ¿Cales dos
// seguintes comandos farán exactamente o mesmo?:
// a. elemento.append(document.createTextNode(text));
// b. elemento.innerHTML = text;
// c. elemento.textContent = text;
//
// a y c hacen lo mismo: insertan el texto literal con etiquetas incluidas, sin procesar HTML.
// b es distinto: interpreta el HTML y lo renderiza como contenido con formato.
