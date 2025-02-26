let numeroUN=1
let stringUn='1'
let numero3 =30
let string3='30'
let numeroDiez=10
let string10='10'


    if(numeroUN==stringUn){
        document.getElementById("resultado1").textContent = "La comparación es Verdadera";
    }else{
        document.getElementById("resultado1").textContent = "La comparación es Falsa";
    }

    if(numero3==string3){
        document.getElementById("resultado2").textContent = "La comparación es Verdadera";
    }else{
        document.getElementById("resultado2").textContent = "La comparación es Falsa";
    }
    if(numeroDiez==string10){
        document.getElementById("resultado3").textContent = "La comparación es Verdadera";
    }else{
        document.getElementById("resultado3").textContent = "La comparación es Falsa";
    }
document.getElementById("compararBtn").addEventListener("click", mostrarvalores);