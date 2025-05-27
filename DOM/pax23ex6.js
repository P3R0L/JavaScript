// Dado un obxecto como o seguinte:
let arbore = {
  Fish: {
    trout: {},
    salmon: {},
  },
  Tree: {
    Huge: {
      sequoia: {},
      oak: {},
    },
    Flowering: {
      "apple tree": {},
      magnolia: {},
    },
  },
};

// Crea unha función createTree(data) que devolva unha lista ul/li coma a da imaxe da
// dereita, para os datos proporcionados.
function createTree(data) {
  const ul = document.createElement("ul");

  for (let clave in data) {
    const li = document.createElement("li");
    li.innerText = clave;

    if (
      typeof data[clave] === "object" &&
      Object.keys(data[clave]).length > 0
    ) {
      const ul2 = createTree(data[clave]);
      li.append(ul2);
    }

    ul.append(li);
  }

  return ul;
}

document.body.appendChild(createTree(arbore));
