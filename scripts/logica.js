/*************************************************************************************************************************/
/********************** VALIDACION DADA PARA SER UTILIZADA ***************************************************************/
/*************************************************************************************************************************/

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
