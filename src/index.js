import validator from './validator.js';

console.log(validator);

const botonInicial = document.getElementById("pay");

let ccNumber = document.getElementById("creditCard");

//Inicio con vista para el ingreso de datos
function hide(){
  document.getElementById("personalData").style.display = "block";
  document.getElementById("result").style.display = "none"; 
}
hide()
//Función para vista con respuesta positiva
function show(){
  document.getElementById("personalData").style.display = "none";
  document.getElementById("result").style.display = "block";
}
//Función que va a traer el maskify
function maskifyNumber(){
  let maskiNumber = validator.maskify(ccNumber.value)
  document.getElementById("maskifyHtml").innerHTML = "Su tarjeta " + maskiNumber + " es válilda" 
}
//Las funciones del botón validador
botonInicial.addEventListener("click", maskifyNumber)
botonInicial.addEventListener("click", function (){
if (validator.isValid(ccNumber.value)) {
        show()
      } else {
        alert("Upss, por favor revise los datos ingresados")
      }
}
);

