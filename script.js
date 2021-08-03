const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")
const button = document.getElementById("somar")
const button = document.getElementById("subtrair")
const button = document.getElementById("multiplicar")
const button = document.getElementById("dividir")

function soma() {
    resultado.value = parseInt (numero1.value) + parseInt (numero2.value)
}
function subtracao() {
    resultado.value = parseInt (numero1.value) - parseInt (numero2.value)
}
function multiplicacao() {
    resultado.value = parseInt (numero1.value) * parseInt (numero2.value)
}
function divisao() {
    resultado.value = parseInt (numero1.value) / parseInt (numero2.value)
}

button.addEventListener("click", soma)
button.addEventListener("click", subtracao)
button.addEventListener("click", multiplicacao)
button.addEventListener("click", divisao)