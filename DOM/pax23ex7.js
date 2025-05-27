const dias = ["L", "M", "Me", "X", "V", "S", "D"];

function cabecera(elemento, dias) {
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  for (let i = 0; i < dias.length; i++) {
    const th = document.createElement("th");
    th.innerText = dias[i];
    tr.append(th);
  }
  thead.append(tr);
  elemento.append(thead);
}

function cuerpo(elemento, ano, mes) {
  const mesMenosUno = mes - 1;
  const date = new Date(ano, mesMenosUno, 1);
  const diaSemana = (date.getDay() + 6) % 7; // Lunes = 0
  const diasEnMes = new Date(ano, mes, 0).getDate();
  let contador = 1;

  const tbody = document.createElement("tbody");
  let tr = document.createElement("tr");

  for (let i = 0; i < diaSemana; i++) {
    const td = document.createElement("td");
    tr.append(td);
  }

  let diaActual = diaSemana;
  while (contador <= diasEnMes) {
    if (diaActual % 7 === 0) {
      tbody.append(tr);
      tr = document.createElement("tr");
    }

    const td = document.createElement("td");
    td.innerText = contador;
    tr.append(td);
    contador++;
    diaActual++;
  }

  if (tr.children.length > 0) {
    tbody.append(tr);
  }

  elemento.append(tbody);
}

function crearCalendario(elemento, ano, mes) {
  const table = document.querySelector(elemento);
  table.innerHTML = "";
  cabecera(table, dias);
  cuerpo(table, ano, mes);
}

crearCalendario("table", 2025, 5);
