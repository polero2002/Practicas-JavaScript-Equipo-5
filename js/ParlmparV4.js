function limpiar(){

    lista=document.querySelectorAll('p');

    if(lista.length!=0){
        i=lista.length-1;  // posiciona en el último párrafo creado
        while(i>-1)
             lista[i].parentNode.removeChild(lista[i--]);
    }
    else alert("No hay párrafos a eliminar");
  }

    function esPar(numero){
      var resultado = parImpar(numero);
         parrafo = document.createElement("p");
         contenido = document.createTextNode("El número "+numero+" es "+resultado);
         parrafo.appendChild(contenido);
         document.body.appendChild(parrafo);
         document.getElementById("num").value="";
      }

  function parImpar(numero) {
        if(numero % 2 == 0)  return "par";
        else return "impar";
}
