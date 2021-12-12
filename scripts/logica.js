/*************************************************************************************************************************/
/********************** VALIDACION DADA PARA SER UTILIZADA ***************************************************************/
/*************************************************************************************************************************/
const divConst = document.getElementsByClassName("div-container-form");

//Funcion para validaion de cedula.
function validarCedula(ci) {
  //Inicializo los coefcientes en el orden correcto
  var arrCoefs = new Array(2, 9, 8, 7, 6, 3, 4, 1);
  var suma = 0;
  //Para el caso en el que la CI tiene menos de 8 digitos
  //calculo cuantos coeficientes no voy a usar
  var difCoef = parseInt(arrCoefs.length - ci.length);
  //recorro cada digito empezando por el de más a la derecha
  //o sea, el digito verificador, el que tiene indice mayor en el array
  for (var i = ci.length - 1; i > -1; i--) {
    //Obtengo el digito correspondiente de la ci recibida
    var dig = ci.substring(i, i + 1);
    //Lo tenía como caracter, lo transformo a int para poder operar
    var digInt = parseInt(dig);
    //Obtengo el coeficiente correspondiente al ésta posición del digito
    var coef = arrCoefs[i + difCoef];
    //Multiplico dígito por coeficiente y lo acumulo a la suma total
    suma = suma + digInt * coef;
  }
  var result = false;
  // si la suma es múltiplo de 10 es una ci válida
  if (suma % 10 === 0) {
    result = true;
  }
  return result;
}

//Slider.
$(".one-time").slick();

//Funciones para efecto de placeholder en formulario.
document.getElementById("name").addEventListener("keyup", function (event) {
  //Guardo el valor del input, y el elemento label correspondiente.
  let label = document.getElementById("lbl-form-name");
  let input = document.getElementById("name").value;

  //Si el input tiene un valor ingresado, muestro el label. De lo contrario no.
  if (input != "") {
    label.style.display = "block";
  } else {
    label.style.display = "none";
  }
});
document.getElementById("apellido").addEventListener("keyup", function (event) {
  let label = document.getElementById("lbl-form-apellido");
  let input = document.getElementById("apellido").value;

  if (input != "") {
    label.style.display = "block";
  } else {
    label.style.display = "none";
  }
});
document.getElementById("ci").addEventListener("keyup", function (event) {
  let label = document.getElementById("lbl-form-ci");
  let input = document.getElementById("ci").value;

  if (input != "") {
    label.style.display = "block";
  } else {
    label.style.display = "none";
  }
});
document.getElementById("email").addEventListener("keyup", function (event) {
  let label = document.getElementById("lbl-form-email");
  let input = document.getElementById("email").value;

  if (input != "") {
    label.style.display = "block";
  } else {
    label.style.display = "none";
  }
});

//Funcion para volver el color original al input.
function retornColorInput(id) {
  let div3 = document.getElementById(id);
  div3.style.border = "1px solid var(--secondary)";
}

//Funcion de validacion de formulario.
function validarForm() {
  //Guardo los valores de los mismos
  let nombre = document.getElementById("name").value;
  let apellido = document.getElementById("apellido").value;
  let email = document.getElementById("email").value;
  let ci = document.getElementById("ci").value;
  let departamento = document.getElementById("dptosLocs").value;

  //Span donde se notificaran errores.
  let span = document.getElementById("span-mensajes");
  //Variables para verificacion si estan todos los campos correctos.
  let total = 0;

  //Si nombre esta vacio, pinto el div correspondiente.
  //De color rojo, y notifico del error.
  if (nombre == "") {
    let div = document.getElementById("div-name");
    div.style.border = "1px solid red";
    span.innerHTML = "Ha dejado campos vacios.";

    //Si nombre tiene menos de 2 caracteres, , pinto el div correspondiente.
    //De color rojo y notifico el error.
  } else if (nombre.length < 2) {
    let div = document.getElementById("div-name");
    div.style.border = "1px solid red";
    span.innerHTML = "Su nombre debe tener minimo 2 letras.";

    //Si esta todo bien le sumo 1 a la variable total.
    //Indicando que este campo esta correcto.
  } else {
    total++;
  }

  //Si apellido esta vacio, pinto el div correspondiente.
  //De color rojo, y notifico del error.
  if (apellido == "") {
    let div = document.getElementById("div-apellido");
    div.style.border = "1px solid red";
  } else if (apellido.length < 2) {
    let div = document.getElementById("div-apellido");
    div.style.border = "1px solid red";
    span.innerHTML = "Su apellido debe tener minimo 2 letras.";

    //Si esta todo bien le sumo 1 a la variable total.
    //Indicando que este campo esta correcto.
  } else {
    total++;
  }

  //Si email esta vacio, pinto el div correspondiente.
  //De color rojo, y notifico del error.
  if (email == "") {
    let div = document.getElementById("div-email");
    div.style.border = "1px solid red";
    span.innerHTML = "Ha dejado campos vacios.";

    //Si esta todo bien le sumo 1 a la variable total.
    //Indicando que este campo esta correcto.
  } else {
    total++;
  }

  //Si CI esta vacio, pinto el div correspondiente.
  //De color rojo, y notifico del error.
  if (ci == "") {
    let div = document.getElementById("div-ci");
    div.style.border = "1px solid red";
    span.innerHTML = "Ha dejado campos vacios.";
  } else if (!validarCedula(ci)) {
    let div = document.getElementById("div-ci");
    div.style.border = "1px solid red";
    span.innerHTML = "La C.I. ingresada no es correcta.";

    //Si esta todo bien le sumo 1 a la variable total.
    //Indicando que este campo esta correcto.
  } else {
    total++;
  }

  if (departamento == "value0") {
    let div = document.getElementById("div-localidad");
    let div1 = document.getElementById("div-departamento");
    div.style.border = "1px solid red";
    div1.style.border = "1px solid red";
  } else {
    total++;
  }

  //Si total es igual a 5 quiere decir que todos los campos fueron
  //ingresados correctamente.
  if (total == 5) {
    //Muestro una notificacion de color verde
    span.style.color = "green";
    span.innerHTML = "Se ha enviado correctamente.";

    //Siguiente a eso recargo la pagina
    window.setTimeout(reload(), 10000);
  }
}

//Funcion para recargar pagina.
function reload() {
  location.reload();
}

//Cancelo evento default de boton submit.
$("#form").on("submit", function (evt) {
  evt.preventDefault();
});
