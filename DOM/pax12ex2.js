// Dado un elemento calquera dunha árbore DOM:
// a. ¿É certo que elemento.lastChild.nextSibling é sempre null?
// Si, esta afirmación é certa. O método lastChild devolve o último nodo fillo dun elemento, e como non hai ningún nodo despois deste, a súa propiedade nextSibling
// sempre será null.

// b. ¿É certo que elemento.children[0].previousSibling é sempre null?
// Non, esta afirmación non é correcta. O método children[0] devolve o primeiro fillo elemento (ignorando nodos de texto ou comentarios), pero pode haber nodos de
// texto (coma espazos en branco ou saltos de liña) antes del. Polo tanto, a propiedade previousSibling pode devolver un nodo de texto e non necesariamente será null.
