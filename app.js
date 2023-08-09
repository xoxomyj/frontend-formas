'use strict'

const formal = document.getElementById('forma1')
const forma2 = document.getElementById('forma2')
const forma3 = document.getElementById('forma3')
const forma4 = document.getElementById('forma4')
const forma5 = document.getElementById('forma5')
const forma6 = document.getElementById('forma6')
const forma7 = document.getElementById('forma7')


function trocarCor () {
    forma1.classList.toggle('amarelo')
}

function trocarForma () {
    forma2.classList.toggle('circulo')
}

function giro () {
    forma3.classList.toggle('giro')
}

function desaparecer () {
    forma4.classList.toggle('desaparecer')
}

function dtamanho () {
    forma5.classList.toggle('tamanho')
}

function atamanho () {
    forma6.classList.toggle('atamanho')
}

function mangulo () {
    forma7.classList.toggle('mangulo')
}
 
forma1.addEventListener('click', trocarCor)
forma2.addEventListener('click', trocarForma)
forma3.addEventListener('click', giro)
forma4.addEventListener('click', desaparecer)
forma5.addEventListener('click', dtamanho)
forma6.addEventListener('click', atamanho)
forma7.addEventListener('click', mangulo)