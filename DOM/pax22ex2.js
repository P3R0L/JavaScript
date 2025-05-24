// Dada unha lista <ol> con varios elementos <li>, crea o código necesario para
// eliminar todos os <li> da lista.
const lis = document.body.querySelectorAll("li");
for (const li of lis) {
  li.remove();
}
