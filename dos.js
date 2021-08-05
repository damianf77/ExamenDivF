function mostrar()
{
    let nacionalidad,
    resultado,
    edad,
    cepa,
    contadorPositivos=0,
    contadorNegativos=0,
    contadorExtCont=0,
    porcentajePos,
    porcentajeNeg,
    edadMasJoven,
    flagMasJoven=1;

    for(let i=1;i<=8;i++){
       nacionalidad = prompt("Ingrese nacionalidad. argentina/extranjero");
       while(nacionalidad != "argentina" && nacionalidad!="extranjero"){
        nacionalidad = prompt("ERROR. Ingrese nacionalidad. argentina/extranjero");
       }
       resultado = prompt("Ingrese resultado. positivo/negativo");
       while(resultado != "positivo" && resultado!="negativo"){
        resultado = prompt("ERROR.Ingrese resultado. positivo/negativo");
       }
       edad = parseInt(prompt("Ingrese edad (entre 18 y 65)"));
       while(edad<18 || edad>65){
        edad = parseInt(prompt("ERROR.Ingrese edad (entre 18 y 65)"));
       }
       cepa = prompt("Ingrese cepa: delta / alfa / beta / ninguna");
       while(cepa!="delta" && cepa!="alfa" && cepa!="beta" && cepa!="ninguna"){
        cepa = prompt("ERROR.Ingrese cepa: delta / alfa / beta / ninguna");
       }
       if(resultado=="positivo"){
           contadorPositivos++;
           porcentajePos=(100/8)*contadorPositivos;
       }
       if(resultado=="negativo"){
        contadorNegativos++;
        porcentajeNeg=(100/8)*contadorNegativos;
        }
        if(flagMasJoven && nacionalidad=="argentina"){
            edadMasJoven=edad;
            flagMasJoven=0;
        }else if(edad<edadMasJoven && nacionalidad=="argentina"){
            edadMasJoven=edad;
        }
        if(nacionalidad=="extranjero" && resultado=="positivo" && cepa=="delta"){
            contadorExtCont++;
        }
    }
    alert(`Porcentaje de positivos: ${porcentajePos}\nPorcentaje de negativos: ${porcentajeNeg}\nCuál es la cepa menos encontrada: \nEdad del menor argentino contagiado: ${edadMasJoven}\nCantidad de personas extranjeras contagiadas con la delta: ${contadorExtCont}`);
}
