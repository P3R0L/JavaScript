// Escribe o código JavaScript para inserir “<li>2</li><li>3</li>” entre os dous <li>
// seguintes:
{
  /* <ul id="listaULExercicio5">
<li id="one">1</li>
<li id="two">4</li>
</ul> */
}
const ul = document.getElementById("listaULExercicio5");
const liOne = ul.firstElementChild;
const liFour = ul.lastElementChild;
liFour.id = "four";
const liTwo = document.createElement("li");
liTwo.id = "two";
liTwo.innerText = "2";
const liThree = document.createElement("li");
liThree.id = "three";
liThree.innerText = "3";

liFour.insertAdjacentElement("beforebegin", liTwo);
liFour.insertAdjacentElement("beforebegin", liThree);
