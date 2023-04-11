function palindromo(cadena) {

    var resultado = "La cadena \""+cadena+"\" \n";
  
    // Pasar a minusculas la cadena
    var cadenaOriginal = cadena.toLowerCase();
  
    // Convertir la cadena en un array
    var letrasEspacios = cadenaOriginal.split("");
  
    // Eliminar los espacios en blanco (este paso es demasiado largo ya que no se utiliza la funcion "replace")
    var cadenaSinEspacios = "";
    for(i in letrasEspacios)
      if(letrasEspacios[i] != " ")
            cadenaSinEspacios += letrasEspacios[i];
  
    var letras = cadenaSinEspacios.split("");
    var letrasReves = cadenaSinEspacios.split("").reverse();
  
    // Este paso tambien es muy largo porque no se utiliza la sentencia "break"
    var iguales = true;
    for(i in letras)
      if(letras[i] != letrasReves[i])
           iguales = false;
  
  
    if(iguales)
      resultado += " es un palíndromo";
    else
      resultado += " no es un palíndromo";
    return resultado;
  }
  function pali(){
    var resultado = palindromo("La ruta nos aporto otro paso natural");
    var resultado2 = palindromo("Esta frase no se parece a ningun palindromo");
    document.getElementById("p1").innerHTML="<h2>"+resultado+"<br>"+resultado2+"</h2>"; 
 

  }