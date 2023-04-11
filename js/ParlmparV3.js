function nuevo(){
    parrafo = document.getElementsByTagName('p')[0];
    parrafo.parentNode.removeChild(parrafo);

  }
    function esPar(numero){
   var resultado = parImpar(numero);
       parrafo = document.createElement("p");
       contenido = document.createTextNode("El número "+numero+" es "+resultado);
       parrafo.appendChild(contenido);
       document.body.appendChild(parrafo);
    }

function parImpar(numero) {
      if(numero % 2 == 0)  return "par";
      else return "impar";
}
