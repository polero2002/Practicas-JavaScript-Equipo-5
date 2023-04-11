function valida(campo) {
    var bRet = false;
    if (campo.value == "")
        document.getElementById("p1").innerHTML = "Faltan Datos";
    else if (!campo.value.match(/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/))
        document.getElementById("p1").innerHTML = "No tiene formato de RFC";

    else if (campo.value.match(/^([A-Z,Ñ,&]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1])[A-Z|\d]{3})$/))
        document.getElementById("p1").innerHTML = "Tiene formato de RFC";
    else
        bRet = true;
    return bRet;
}



