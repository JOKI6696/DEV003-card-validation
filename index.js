import validator from './validator.js';

const botonInicial = document.getElementById("boton");

const nombre = document.getElementById("name");
const apellido = document.getElementById("lastName");
const correo = document.getElementById("email");
const direccion = document.getElementById("adress");
const ccNumber = document.getElementById("creditCard");
const mes = document.getElementById("month");
const año = document.getElementById("year");
const ccv = document.getElementById("ccv");



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
  document.getElementById("maskifyHtml").innerHTML = "Su tarjeta " + validator.maskify(ccNumber.value) + " es válilda";
}

//Función principal
function require(){
  if(nombre.value.length === 0){
    alert("Por favor introduzca su nombre");
  } else if (apellido.value.length === 0){
    alert("Por favor introduzca su apellido");
  } else if (correo.value.length === 0){
    alert("Por favor introduzca su correo");
  } else if (direccion.value.length === 0){
    alert("Por favor introduzca su dirección");
  } else if (ccNumber.value.length === 0){
    alert("Por favor introduzca su tarjeta de crédito");
  } else if (mes.value.length === 0){
    alert("Por favor introduzca el mes de vencimiento");
  } else if (año.value.length === 0){
    alert("Por favor introduzca el año de vencimiento");
  } else if (ccv.value.length === 0){
    alert("Por favor introduzca el código ccv, lo encuentra al reverso de la tarjeta");
  } else if (validator.isValid(ccNumber.value)) {
    show();
  } else {
    alert("Upss, por favor revise los datos ingresados")
  }
}

//botonInicial.addEventListener("click", validar)
botonInicial.addEventListener("click", function(event){
  event.preventDefault();
  require();})
