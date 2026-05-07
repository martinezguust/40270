let botones = document.getElementsByClassName("numeros")
let resultado = document.getElementById("resultado")

for (const key in botones) {
    if (!Object.hasOwn(botones, key)) continue;

    const boton = botones[key];
    boton.addEventListener("click", pinta)
}

function pinta(e) {
    resultado.value += e.target.innerText
}

let operadores = document.getElementsByClassName("operadores")
let prm, operacion

for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;

    const boton = operadores[key];
    
    if (boton.innerText == "CE") {
        boton.addEventListener("click", limpiar)
    } else if (boton.innerText == "="){
        boton.addEventListener("click", igual)
    } else {
        boton.addEventListener("click", prepararOperacion)
    }
}

function limpiar() {
    resultado.value = ""
    prm = ""
    operacion = ""
}

function prepararOperacion(e) {
    prm = resultado.value
    operacion = e.target.innerText
    resultado.value = ""
}

function igual() {
    let prm2 = resultado.value
    let res = 0
    
    let n1 = parseFloat(prm)
    let n2 = parseFloat(prm2)

    if (operacion == "+") {
        res = n1 + n2
    } else if (operacion == "-") {
        res = n1 - n2
    } else if (operacion == "x") {
        res = n1 * n2
    } else if (operacion == "/") {
        res = n1 / n2
    }

    resultado.value = res
}