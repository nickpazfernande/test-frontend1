//Objeto con valores de departamentos y localidades.
let dptosLocs = {
  Artigas: ["Artigas", "Bella Unión"],
  Canelones: ["Canelones", "Santa Lucía"],
  Montevideo: ["Montevideo"],
  Salto: ["Salto", "Daymán", "Arapey"],
};

//Funcion para cargar localidades.
function cargarLocalidades() {
  //Guardo lo seleccionado en el select.
  let select = document.getElementById("dptosLocs").value;

  //Si select es = Artigas
  if (select == "Artigas") {
    //reinicio el select locaciones
    document.getElementById("locaciones").options.length = 0;

    //Recorro el Array Artigas
    for (let i = 0; i < dptosLocs.Artigas.length; i++) {
      //Agrego un option al select con cada uno de sus items.
      document.getElementById("locaciones").options[i] = new Option(
        dptosLocs.Artigas[i]
      );
    }
  }

  //Igual con las proximas 3, con su correspondiente departamento.

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
