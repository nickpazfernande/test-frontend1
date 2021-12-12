let dptosLocs = {
  Artigas: ["Artigas", "Bella Unión"],
  Canelones: ["Canelones", "Santa Lucía"],
  Montevideo: ["Montevideo"],
  Salto: ["Salto", "Daymán", "Arapey"],
};

console.log(dptosLocs.Artigas.length);

function countProperties(obj) {
  var count = 0;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }

  return count;
}

function cargarLocalidades() {
  let select = document.getElementById("dptosLocs").value;
  if (select == "Artigas") {
    document.getElementById("locaciones").options.length = 0;
    document.getElementById("locaciones").options[0] = new Option("Holaaaaa");
    for (let i = 0; i < dptosLocs.Artigas.length; i++) {
      document.getElementById("locaciones").options[i] = new Option(
        dptosLocs.Artigas[i]
      );
    }
  }

  if (select == "Canelones") {
    document.getElementById("locaciones").options.length = 0;
    document.getElementById("locaciones").options[0] = new Option("Holaaaaa");
    for (let i = 0; i < dptosLocs.Canelones.length; i++) {
      document.getElementById("locaciones").options[i] = new Option(
        dptosLocs.Canelones[i]
      );
    }
  }

  if (select == "Montevideo") {
    document.getElementById("locaciones").options.length = 0;
    for (let i = 0; i < dptosLocs.Montevideo.length; i++) {
      document.getElementById("locaciones").options[i] = new Option(
        dptosLocs.Montevideo[i]
      );
    }
  }

  if (select == "Salto") {
    document.getElementById("locaciones").options.length = 0;
    for (let i = 0; i < dptosLocs.Salto.length; i++) {
      document.getElementById("locaciones").options[i] = new Option(
        dptosLocs.Salto[i]
      );
    }
  }
}
