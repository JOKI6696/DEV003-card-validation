const validator = {

  isValid : function cardValidation(ccNumber){
    //Voltear los dígitos y convertir a array
    const ccReversed = ccNumber.split("").reverse().map(Number);
    //Crear variables para la suma
    let addEven = 0;
    let addOdd = 0;
    //Función for para realizar los cálculos
    for (let i=0; i<ccReversed.length; i++){
    //Para números en posición par
      if (i % 2 !== 0){
        //Si la multiplicación es de dos cifras
        if(ccReversed[i] * 2 > 9){
          addEven += ccReversed[i] * 2 - 9;
        //Si la multiplicación es de una cifra
        } else{
          addEven += ccReversed[i] * 2;
        }
      //Para números en posicón impar
      } else{
        addOdd += ccReversed[i];
      }
    }
    //Retorna si es válido o no (T/F)
    return (addEven + addOdd) % 10 === 0
  }

  , maskify : function hideNumber(ccNumber) {
    //Basta cons el replace [0-9], pero por el test se agregó el [a-z]
    return ccNumber.slice(0, -4).replace(/[0-9]/g, '#').replace(/[a-z]/ig,'#').concat(ccNumber.slice(-4, ccNumber.length));
  }
}

export default validator;
