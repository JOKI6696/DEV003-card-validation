const validator = {
  // ...
};

const botonInicial = document.getElementById("pay");
let creditCardNumber = document.getElementById("creditCard");

botonInicial.addEventListener("click", convert);

function convert (val){
    val = creditCardNumber.value.split('').reverse().map(Number);
    console.log(val);
}

export default validator;
