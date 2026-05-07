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
let pres = []
let operacion

for (const key in operadores) {
    if (!Object.hasOwn(operadores, key)) continue;

    const boton = operadores[key];
    
    if (boton.innerText == "CE") {
        boton.addEventListener("click", limpiar)
    } else if (boton.innerText == "="){
        boton.addEventListener("click", igual)
    } else {
        boton.addEventListener("click", obtener_parametros)
    }
}

function limpiar() {
    resultado.value = ""
    pres = []
    operacion = ""
}

function obtener_parametros(e) {
    pres.push(resultado.value)
    operacion = e.target.innerText
    resultado.value = ""
}
function igual() {
    pres.push(resultado.value)
    let r = 0
    let op = operacion
    let bandera = false 

    for (const key in pres) {
        if (Object.prototype.hasOwnProperty.call(pres, key)) {
            const prm = pres[key];

            switch (op) {
                case "+":
                    r += parseFloat(prm)
                    break
                case "-":
                    if (bandera == false) {
                        r = parseFloat(prm)
                        bandera = true
                    } else {
                        r -= parseFloat(prm)
                    }
                    break
                case "x":
                    if (bandera == false) {
                        r = parseFloat(prm)
                        bandera = true
                    } else {
                        r *= parseFloat(prm)
                    }
                    break
                case "/":
                    if (bandera == false) {
                        r = parseFloat(prm)
                        bandera = true
                    } else {
                        r /= parseFloat(prm)
                    }
                    break
            }
        }
    }

    resultado.value = r
    pres = []
}