// Dado o seguinte código:

// HTML
{
  /* <table id="taboa">
  Texto
  <tr>
    <td>Test</td>
  </tr>
</table>; */
}

//JS
let taboa = document.getElementById("taboa");
taboa.remove();

// ¿Por qué segue aparecendo o “Texto” despois de borrar a táboa?
// O texto segue aparecendo porque o navegador tratouno como contido fóra da táboa debido a unha estrutura HTML incorrecta. Por iso, ao borrar a táboa, o texto non se elimina xunto con ela.
