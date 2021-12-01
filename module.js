
const binaryToDecimal = (binary) => {

    let binaryLenght = binary.length;
    let arrayBinary = binary.split('');
    binaryLenght -= 1;
    let total = 0;
    let testBinary = 0;

    arrayBinary.forEach((valor) =>{
        if(valor !== '1' && valor !== '0'){
            testBinary++;
            console.log(testBinary);
        }

    });

    if( testBinary == 0){

    for(var i = 0; i < binary.length; i++){
        

        total = total +  ((Math.pow(2, i)) * parseInt(binary[binaryLenght]));

        
        binaryLenght--;


    }

    return total;

    } else {
        window.alert("Digite um valor Binario!");
    }



}

export default binaryToDecimal;