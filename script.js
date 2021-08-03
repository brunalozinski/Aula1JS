const numero1 = document.getElementById("numero1")
const numero2 = document.getElementById("numero2")
const resultado = document.getElementById("resultado")

const button = document.getElementById("somar")
const button = document.getElementById("subtrair")
const button = document.getElementById("multiplicar")
const button = document.getElementById("dividir")

const formulario = document.getElementById("formulario")

function soma() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt (numero1.value) + parseInt (numero2.value)

        formulario.classList.add("somar")
    } else {
        alert("Preencha todos os campos solicitados!")
    }
}

function subtracao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt (numero1.value) - parseInt (numero2.value)
        
        formulario.classList.add("subtrair")
    } else {
        alert("Preencha todos os campos solicitados!")
    }
}

function multiplicacao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt (numero1.value) * parseInt (numero2.value)
        
        formulario.classList.add("multiplicar")
    } else {
        alert("Preencha todos os campos solicitados!")
    }
}

function divisao() {
    if (numero1.value !== '' && numero2.value !== '') {
        resultado.value = parseInt (numero1.value) / parseInt (numero2.value)

        formulario.classList.add("dividir")
    } else {
        alert("Preencha todos os campos solicitados!")
    }
}

button.addEventListener("click", soma)
button.addEventListener("click", subtracao)
button.addEventListener("click", multiplicacao)
button.addEventListener("click", divisao)