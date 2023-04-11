
function factorial(){
var numero = prompt("Introduce un n\u00famero y se mostrar\u00e1 su factorial");
var resultado = 1;

for(var i=1; i<=numero; i++) {
  resultado *= i;
}
return 'El resultado es'+resultado;
}
function imprimir(){
    var resultado = factorial();
     document.getElementById("p1").innerHTML="<h2>El factorial es  "+resultado +"</h2>"; 
  }