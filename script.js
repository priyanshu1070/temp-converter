const toggle = document.getElementById("toggle");
const button = document.getElementById("btn");
let left_panel = document.getElementById("input");
const right_panel = document.getElementById("output");
let input;
let output;
let celsius;
let fahrenheit;
left_panel.oninput=convert;
right_panel.disabled=true;
toggle.onclick=switch_Temp;
function convert(){
     input = Number(left_panel.value);
    if (toggle.checked){
        celsius = (input-32)*(5/9);
        output=celsius;
        right_panel.value=celsius+"°C";
    }
    else if(!(toggle.checked)){
        fahrenheit = (input * 9/5) + 32;
        right_panel.value=fahrenheit+"°F";
    }
    else{
        window.alert("Select the conversion first.")
    }
}
function switch_Temp()
{    output=fahrenheit;
    left_panel.value=output+"°F";
    right_panel.value=input+"°C";
}