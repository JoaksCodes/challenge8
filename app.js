let respuesta = prompt("Por qué la luna es mayor que el sol?");
let intentos = 1;

while (respuesta !== "Porque la dejan salir de noche") {
  if (intentos === 3) {
    alert("La gente grande puede...");
  }

  respuesta = prompt("¿Por qué la luna es mayor que el sol?");
  intentos++;
}

alert("Claro que si pa!");
