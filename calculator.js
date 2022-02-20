var display = document.querySelector("#display");

function showDisplay(value){
      display.value += value;
}

function clearAll(){
    display.value = "";
}

function result (){
    let y = eval(display.value);
    display.value = y;

    if (display.value == "undefined"){
        display.value = "";
    }
}