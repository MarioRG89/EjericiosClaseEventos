let contador = 1;
let intervalo;
window.onload = function () {

    document.getElementById("boton1").addEventListener("click", function () {
        intervalo = timer();

    }, false);
    document.getElementById("boton2").addEventListener("click", function () {
        clearInterval(intervalo);
    }, false);

    document.body.addEventListener("keypress", ejercicio2, false);
    window.addEventListener("dblclick",function(){
        alert("hola");
        document.body.style.backgroundColor=colorRGB();
    },false);
}
//ejercicio2
function ejercicio2() {
    if (contador % 2 != 0) {
        document.getElementById("parrafo").innerHTML = "gola";
        contador++;
    } else {
        document.getElementById("parrafo").innerHTML = "";
        contador++;
    }
}
//Ejercicio 1
function timer() {
    var tiempo = setInterval(function () {
        alert("Este sábado a las 3 son las 2");
    }, 5000)
    return tiempo;
}
//Ejercicio3
function generarNumero(numero){
	return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
	var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
	return "rgb" + coolor;
}