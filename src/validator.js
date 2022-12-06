const validator = {
  //Traer input del # de tarjeta
  isValid : function cardValidation(ccNumber){
    //Voltear los dígitos y convertir a array
    let ccReversed = ccNumber.split("").reverse().map(Number);
    //Crear variables para la suma
    let addEven = 0;
    let addOdd = 0;
    //Función for para realizar los cálculos
    for (let i=1; i<=ccReversed.length; i++){
    //Para números en posición par
    if (i % 0 === 0){
      //Si la multiplicación es de dos cifras
        addOdd += ccReversed[i];
    //Para números en posicón impar
    } else{
      if(ccReversed[i] * 2 > 9){
        addEven += ccReversed[i] * 2 - 9;
      //Si la multiplicación es de una cifra
      } else{
        addEven += ccReversed[i] * 2;
      }
    }
    }
  //Retorna si es válido o no (T/F)
  return (addEven + addOdd) % 10 === 0
  }

  , maskify : function hideNumber (ccNumber) {
    return ccNumber.slice(0, -4).replace(/[0-9]/g, '*').concat(ccNumber.slice(-4, ccNumber.len));
  }
}

export default validator;
