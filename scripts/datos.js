let dptosLocs = {
  Artigas: ["Artigas", "Bella Unión"],
  Canelones: ["Canelones", "Santa Lucía"],
  Montevideo: ["Montevideo"],
  Salto: ["Salto", "Daymán", "Arapey"],
};

function countProperties(obj) {
  var count = 0;

  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) ++count;
  }

  return count;
}

//**********Evento que se ejecuta al cargar el DOM ********/
window.addEventListener("DOMContentLoaded", (event) => {
  //Funcion para cargar los valores de departamentos.
});

function cargarLocalidades() {
  let select = document.getElementById("dptosLocs").value;
  let lenght = countProperties(dptosLocs.select);

  
  alert(if (select == dptosLocs[1]){return true} else {return false});

  //   for (let i=0; i<select.length) {
  //     let option = document.createElement("option");
  //     option.text = dptosLocs[value];
  //     select.add(option);
  //   }
}
