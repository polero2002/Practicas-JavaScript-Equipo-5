function validaFechaMenor(campo){
    var bRet = false;
    var dHoy = new Date().toLocaleDateString('en-US');
    var dCapt = null;

    const fecha2 = new Date(dHoy);

    // Obtenemos el día, mes y año de la fecha
    const dia2 = fecha2.getDate().toString().padStart(2, '0');
    const mes2 = (fecha2.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque los meses empiezan en 0
    const anio2 = fecha2.getFullYear().toString();
    
    // Formateamos la fecha en el formato deseado
    const fechaFormateada2 = `${dia2}/${mes2}/${anio2}`;

    if (campo.value == "")
      alert("Faltan datos");
    else{

      const fecha = new Date(campo.value);

// Obtenemos el día, mes y año de la fecha
const dia = fecha.getDate().toString().padStart(2, '0');
const mes = (fecha.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 porque los meses empiezan en 0
const anio = fecha.getFullYear().toString();

// Formateamos la fecha en el formato deseado
const fechaFormateada = `${dia}/${mes}/${anio}`;


      dCapt = validaFecha(fechaFormateada);
      if (dCapt != null && dCapt < fechaFormateada2)
        bRet = true;
      
    }
    return bRet;
  }

    function validaFecha(valor){
            var dConvertida = null;
            var sAnio = "";
            var sMes = "";
            var sDia = "";
            var nAnio=0, nMes=0, nDia = 0;

            if (valor.match(/^\d{2}\/\d{2}\/\d{4}$/)){
                nDia = parseInt(valor.substring(0,2), 10);
                nMes = parseInt(valor.substring(3,5), 10);
                nAnio = parseInt(valor.substring(6,10), 10);

                if (nDia <1 || nDia>31)
                    alert("El día no es válido")
                else{
                    if (nMes <1 || nMes>12)
                        alert("El mes no es válido");
                    else{
                        if ((nMes==1 || nMes==3 || nMes==5 || nMes==7 ||
                             nMes==8 || nMes==10 || nMes==12) && nDia > 31)
                             alert("El mes tiene máximo 31 días");
                        else if ((nMes==4 || nMes==6 || nMes==9 ||
                                    nMes==11) && nDia > 30)
                             alert("El mes tiene máximo 30 días");
                        else if ((nMes==2) && ((nDia>29) || (nAnio%4!=0 && nDia>28)))
                             alert("Febrero tiene 28 días o 29 en bisiesto");
                        else{
                            dConvertida = new Date();
                            dConvertida.setFullYear(nAnio, nMes-1, nDia);
                        }//fin validaci n día-mes
                    }//mes válido
                }//día válido
          creasigno(nDia,nMes);
            }//formato válido

            else{
                alert("No tiene formato de fecha");
            }
            return dConvertida;
    }
    function creasigno(nDia,nMes){

      function randomnum(){
        var randomNumber = Math.floor(Math.random() * 100) + 1;
        return randomNumber;
      }
    var newDiv = document.createElement("div");

    if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
    var newContent = document.createTextNode("SIGNO ARIES y su Numero de la suerte:" +randomnum() );
    else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
      var newContent = document.createTextNode("SIGNO TAURO y su Numero de la suerte:" +randomnum());
      else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
        var newContent = document.createTextNode("SIGNO GEMINIS y su Numero de la suerte:" +randomnum());
        else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
          var newContent = document.createTextNode("SIGNO CANCER y su Numero de la suerte:" +randomnum());
          else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
            var newContent = document.createTextNode("SIGNO LEO y su Numero de la suerte:" +randomnum());
            else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
              var newContent = document.createTextNode("SIGNO VIRGO y su Numero de la suerte:" +randomnum());
              else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
                var newContent = document.createTextNode("SIGNO LIBRA y su Numero de la suerte:" +randomnum());
                else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
                  var newContent = document.createTextNode("SIGNO ESCORPIO y su Numero de la suerte:" +randomnum());
                  else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
                    var newContent = document.createTextNode("SIGNO SAGITARIO y su Numero de la suerte:" +randomnum());
                    else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
                      var newContent = document.createTextNode("SIGNO CAPRICORNIO y su Numero de la suerte:" +randomnum());
                      else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
                        var newContent = document.createTextNode("SIGNO ACUARIO y su Numero de la suerte:" +randomnum());
                        else if ((nDia>22) && (nMes==2) || (nDia <=23) && (nMes==3))
                          var newContent = document.createTextNode("SIGNO PICIS y su Numero de la suerte:" +randomnum() );


    //var newContent = document.createTextNode("SIGNO");
    newDiv.appendChild(newContent); //añade texto al div creado.

     // añade el elemento creado y su contenido al DOM
     var currentDiv = document.getElementById("div");
     document.body.insertBefore(newDiv, currentDiv);

     if((nDia>20) && (nMes==3) || (nDia <=20) && (nMes==4))
     newDiv.style="border: 3px solid yellow; background-color:yellow; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>20) && (nMes==4) || (nDia <=20) && (nMes==5))
     newDiv.style="border: 3px solid pink; background-color:pink; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>20) && (nMes==5) || (nDia <=20) && (nMes==6))
     newDiv.style="border: 3px solid green; background-color:green; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>20) && (nMes==6) || (nDia <=22) && (nMes==7))
     newDiv.style="border: 3px solid red; background-color:red; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>22) && (nMes==7) || (nDia <=23) && (nMes==8))
     newDiv.style="border: 3px solid orange; background-color:orange; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>23) && (nMes==8) || (nDia <=22) && (nMes==9))
     newDiv.style="border: 3px solid blue; background-color:blue; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>22) && (nMes==9) || (nDia <=22) && (nMes==10))
     newDiv.style="border: 3px solid purple; background-color:purple; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>22) && (nMes==10) || (nDia <=22) && (nMes==11))
     newDiv.style="border: 3px solid brown; background-color:brown; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>22) && (nMes==11) || (nDia <=21) && (nMes==12))
     newDiv.style="border: 3px solid white; background-color:white; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>21) && (nMes==12) || (nDia <=21) && (nMes==1))
     newDiv.style="border: 3px solid lightblue; background-color:lightblue; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>21) && (nMes==1) || (nDia <=21) && (nMes==2))
     newDiv.style="border: 3px solid gray; background-color:gray; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     else if ((nDia>22) && (nMes==2) || (nDia <=23) && (nMes==3))
     newDiv.style="border: 3px solid silver; background-color:silver; width: 200px ;height:300px; margin-left:50px; text=align: center; ";
     

    
}
