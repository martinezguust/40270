let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;

    const boton = botones[key];
    console.log(boton)
    boton.addEventListener("click", pinta)

}

function pinta(e) {
    resultado.value += e.target.innerText
}

let Ce = document.getElementById("bCe")
let operadores = document.getElementsByClassName("operador")
let prm, operacion
for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;

    const boton = operadores[key];
    if (boton.innerText == "Ce") {
        boton.addEventListener("click", limpiar)
    } else if (boton.innerText == "+") {
        boton.addEventListener("click", sumar)
    } else if (boton.innerText == "="){
        boton.addEventListener("click", igual)
    } else {

        boton.addEventListener("click", pintar2)
    }


}

function pintar2(e) {
    console.log(e.target.innerText)
}

function limpiar() {
    resultado.value = ""
}

function sumar(e) {
    prm = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
    e.target.style.backgroundColor = "red"
}

function igual(){
    let prm2 = resultado.value
    if (operacion == "+"){
        resultado.value = parseInt(prm) + parseInt(prm2)
    }
}