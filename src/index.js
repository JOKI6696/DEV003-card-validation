import validator from './validator.js';

console.log(validator);

const botonInicial = document.getElementById("pay");

let ccNumber = document.getElementById("creditCard");

botonInicial.addEventListener("click", function (){
if (validator.isValid(ccNumber.value)) {
        alert("Gracias por su compra")
      } else {
        alert("Upss, por favor revise los datos ingresados")
      }
}
);

