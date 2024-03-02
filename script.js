let intentos = 6;
let tieneVidas = intentos;
let palabra = "APPLE";

let diccionario = ["APPLE", "MOUSE", "PAUSE", "ANGEL", "PASTA", "HOUSE"];
palabra = diccionario[1];
function palabraAleatoria(diccionario){
let max = diccionario.length - 1;
let indice =Math.floor(Math.random() * max + 1);
return diccionario[indice];
}

document.getElementById("guess-button").addEventListener("click", () => {
  if (tieneVidas === 0) {
    terminar("¡PERDISTE!");
    return;
  }

  const INTENTO = leerIntento();
  if (INTENTO === palabra) {
    console.log("GANASTE!");
  } else {
    console.log("");
    return;
  }

  const row = document.createElement("div");
  row.className = "row";
  const GRID = document.getElementById("grid");

  for (let i in INTENTO){
    const span = document.createElement("span");
    span.className = "letter";

    if (INTENTO[i] === palabra[i]){ //COLOR VERDE
      span.innerText = INTENTO[i];
      span.style.backgroundColor = '#79b851';
      console.log(INTENTO[i],"VERDE");

    } else if (palabra.includes(INTENTO[i])){ //COLOR AMARILLO
      span.innerHTML = INTENTO[i];
      span.style.backgroundColor = '#f3c237';
      console.log(INTENTO[i],"AMARILLO");

    } else { //COLOR GRIS
      span.innerHTML = INTENTO[i];
      span.style.backgroundColor ='#a4aec4';
      console.log(INTENTO[i],"GRIS");
    }
    row.appendChild(span);
  }
  GRID.appendChild(row);
  console.log(row);

  tieneVidas--;
  if (!tieneVidas){
    terminar("¡PERDISTE!");
    return;
  }
});

function leerIntento(){
  const input = document.getElementById("guess-input");
  const valor = input.value.toUpperCase();
  if (valor.length > 5) {
    alert("Solo puedes ingresar hasta 5 letras");
    input.value = '';
    return;
  }
  input.value = '';
  return valor;
}
