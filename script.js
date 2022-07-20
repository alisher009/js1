let  nummbers = document.getElementById('nummber')
let value = 0;


let btnPluse = document.querySelector(".btn_plus")
let btnMinus= document.querySelector(".btn_minus")
let btnRestart = document.querySelector(".btn_restart")

btnPluse.onclick = () => {
    value++;
    nummbers.textContent = value;
}
btnMinus.onclick = () => {
    if(value == 0 ) {
        value = 0
    } else {
        value--;
        nummbers.textContent = value;

    }
}
btnRestart.onclick = () => {
    value = 0;
    nummbers.textContent = value;
}
