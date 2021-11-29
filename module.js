
const binaryToDecimal = (binary) => {

    let strLenght = binary.length;
    strLenght -= 1;
    let total = 0;


    for(var i = 0; i < binary.length; i++){
        

        total = total +  ((Math.pow(2, i)) * parseInt(binary[strLenght]));

        
        strLenght--;


    }

    return total;

}

export default binaryToDecimal;