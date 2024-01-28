
const textbox=document.getElementById("textbox");
const tofrn=document.getElementById("tofrn");
const tocel=document.getElementById("tocel");
const Result=document.getElementById("Result");

let temp;

function convert(){

    if(tofrn.checked){
        temp=Number(textbox.value);
        temp=(temp*9/5)+32;
        Result.textContent= temp + "°F";

    }
    else if(tocel.checked){
        temp=Number(textbox.value);
        temp=(temp-32)*(5/9);
        Result.textContent= temp.toFixed(1) + "°C";
    }
    else{
        Result.textContent="select a unit"
    }

}