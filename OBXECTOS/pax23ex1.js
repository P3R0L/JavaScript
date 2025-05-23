// Crea un obxecto chamado television coas propiedades marca, categoría
// (televisores), unidades (4), prezo (354.99) e un método chamado importe que
// devolva o prezo total das unidades (unidades x prezo).

const television = {
  marca: "LG",
  categoría: "televisores",
  unidades: 4,
  prezo: 354.99,
  importe() {
    return this.prezo * this.unidades;
  },
};

console.log(television.marca);
console.log(television.importe());
