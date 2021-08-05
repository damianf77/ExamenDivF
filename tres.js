function mostrar()
{
	let flagIngreso=1,
	flagMenorcant=1,
	acumVacunas=0,
	contadorVuelos=0,
	ingreso,
	origen,
	cantidad,
	costo,
	menorCant,
	origenMenor,
	promVacunOcc,
	acumPrecioTotal=0;

	while(flagIngreso){
		ingreso = prompt("¿Desea ingresar datos al registro? Responda con: si/no");
		while(ingreso != "si" && ingreso != "no"){
			ingreso = prompt("ERROR. ¿Desea ingresar datos al registro? Responda con: si/no");
		}
		flagIngreso = 0;
	}
	while(ingreso == "si"){
		origen=prompt("ingrese origen oriente/occidente/secreto");
		while(origen!="oriente" && origen!="occidente" && origen!="secreto"){
			origen=prompt("ERROR. Ingrese oorigen oriente/occidente/secreto");
		}
		cantidad=parseInt(prompt("cantidad de vacunas (entre 500mil y 25 millones)"));
		while(cantidad<500000 || cantidad>25000000){
			cantidad=parseInt(prompt("cantidad de vacunas (entre 500mil y 25 millones)"));
		}
		costo=prompt("costo del vuelo (entre 1 y 5 millones)");
		while(costo<1000000 || costo>5000000){
			costo=prompt("costo del vuelo (entre 1 y 5 millones)");
		}
		if(flagMenorcant){
            menorCant=cantidad;
            flagMenorcant=0;
			origenMenor=origen;
        }else if(cantidad<menorCant){
            menorCant=cantidad;
			origenMenor=origen;
        }
		acumVacunas=+cantidad;
		if(origen=="occidente"){
			contadorVuelos++
			promVacunOcc=(acumVacunas/contadorVuelos)
		}
		acumPrecioTotal=+costo;
		ingreso = prompt("¿Desea continuar ingresando datos al registro? Responda con: si/no");
	}
	alert(`origen que envio menos: ${origenMenor}, ${menorCant}\npromedio por vuelo de occidente: ${promVacunOcc}\ntotal sin descuentos a pagar por los gastos de los viajes:${acumPrecioTotal}`);
}
