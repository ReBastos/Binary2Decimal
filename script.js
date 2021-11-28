
function binaryToDecimal () {

    let binary = "11001";
    let strLenght = binary.length;
    strLenght -= 1;
    let total = 0;


    for(i = 0; i < binary.length; i++){

        total = total +  ((Math.pow(2, i)) * parseInt(binary[strLenght]));

        
        strLenght--;


    }

    return total;

}

console.log(binaryToDecimal());