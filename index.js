import binaryToDecimal from "./module.js";

var binaryInput = document.getElementById("binary").value;

document.getElementById("submit").addEventListener("click", set);

function set() {
    
    let inputValue = `${document.getElementById("binary").value}`;
    
    document.getElementById('value').textContent = binaryToDecimal(inputValue);
    
}