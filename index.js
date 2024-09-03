var flecha_derecha = window.document.getElementById("flecha_derecha")
var Samantha = window.document.getElementById("Samantha")
var Leonardo = window.document.getElementById("Leonardo")
var Bruna = window.document.getElementById("Bruna")
var flecha_izquierda =  window.document.getElementById("flecha_izquierda")

function Rodar_para_la_derecha() {
    Samantha.style = "display:none"
    Bruna.style = "display:flex"
    flecha_derecha.style = "display:none"
    flecha_izquierda.style = "display:flex; margin-top: 55px"
}

function RodaParaLaIzquierda() {
    Samantha.style = "display:flex"
    Bruna.style = "display:none"
    flecha_derecha.style = "display:flex"
    flecha_izquierda.style = "display:none"
}