// const toCelsius = document.getElementById("tocelsius");
// const toFahrenheit = document.getElementById("tofahrenheit");
const toggle = document.getElementById("toggle");
const button = document.getElementById("btn");
const left_panel = document.getElementById("input");
const output = document.getElementById("output");

button.onclick=convert;
toggle.onclick=convert;

function convert(){
    let input = Number(left_panel.value);
    let celsius;
    let fahrenheit;
    if (toggle.checked){
        celsius = (input-32)*(5/9);
        output.value=celsius;
    }
    else if(!(toggle.checked)){
        fahrenheit = (input * 9/5) + 32;
        output.value=fahrenheit;
    }
    else{
        window.alert("Select the conversion first.")
    }
}
