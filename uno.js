
function mostrar()
{
	let flagIngreso = 1,
	flagMasJoven=1,
	ingreso,
	nombre,
	edad,
	vacuna,
	dosis,
	sexo,
	contadorChina=0,
	contadorRusa=0,
	contadorAmericana=0,
	contadorMenoresAmerica=0,
	acumuladorChina=0,
	edadPromChina,
	edadMasJoven,
	nombreJoven,
	vacunaJoven,
	edadMenorAmericana=0,
	porcentajeMenores,
	totalVacunados=0,
	primeraDosis=0,
	porcentajePrimDosis;

	while(flagIngreso){
		ingreso = prompt("¿Desea ingresar datos al registro? Responda con: si/no");
		while(ingreso != "si" && ingreso != "no"){
			ingreso = prompt("ERROR. ¿Desea ingresar datos al registro? Responda con: si/no");
		}
		flagIngreso = 0;
	}
	while(ingreso == "si"){
			nombre = prompt("Ingrese nombre del paciente");
			while(nombre.length<=3 || nombre.length>10){
				nombre = prompt("ERROR. Ingrese nombre del paciente, debe tener entre 3 y 10 caracteres");
			}
			edad = parseInt(prompt("Ingrese edad del paciente"));
			while(edad<12){
				edad = parseInt(prompt("Ingrese edad del paciente, debe ser mayor de 12 años"));
			}
			sexo = prompt("ingrese sexo del paciente. m/f");
			while(sexo!="m" && sexo!="f"){
				sexo = prompt("ERROR.ingrese sexo del paciente correctamente. m/f");
			}
			if(edad>=12 && edad<=17){
				vacuna="americana";
				alert("solo se permite la vacuna americana para adolescentes entre 12 y 17 años")
			}else{
				vacuna = prompt("Ingrese procedencia de la vacuna. rusa / china / americana");
				while(vacuna!="rusa" && vacuna!="china" && vacuna!="americana"){
					vacuna = prompt("ERROR. Ingrese procedencia de la vacuna correcta. rusa / china / americana");
				}
			}
			dosis = prompt("Indique si es primer o segunda dosis. Responda con: p/s");
			while(dosis!="p" && dosis!="s"){
				dosis = prompt("ERROR.Indique si es primer o segunda dosis. Responda con: p/s");
			}
			ingreso = prompt("¿Desea continuar ingresando datos al registro? Responda con: si/no");
			while(ingreso != "si" && ingreso != "no"){
				ingreso = prompt("ERROR. ¿Desea continuar ingresando datos al registro? Responda con: si/no");
			}
			if(vacuna=="china"){
				contadorChina++;
				acumuladorChina=+edad;
				edadPromChina=acumuladorChina/contadorChina;
			}
			if(vacuna=="rusa"){
				contadorRusa++;
			}
			if(vacuna=="americana"){
				contadorAmericana++;
				if(edad<18){
					contadorMenoresAmerica++;
					edadMenorAmericana++;
					porcentajeMenores=100/contadorAmericana*contadorMenoresAmerica;
				}
			}
			if(flagMasJoven){
				edadMasJoven=edad;
				flagMasJoven=0;
				nombreJoven=nombre;
				vacunaJoven=vacuna;
			}else if(edad<edadMasJoven){
				edadMasJoven=edad;
				nombreJoven=nombre;
				vacunaJoven=vacuna;
			}
			if(dosis=="p"){
				primeraDosis++;
			}
			totalVacunados++;
			porcentajePrimDosis=(100/totalVacunados)*primeraDosis;
	}
	alert(`Promedio de edad de los que se vacunaron con la china: ${edadPromChina} \n Nombre y vacuna del hombre más joven: ${nombreJoven}, ${vacunaJoven} \n De las personas que recibieron la vacuna americana que porcentaje son menores de edad: ${porcentajeMenores} \n Porcentaje de los que están vacunados con 1 dosis sobre el total de vacunados: ${porcentajePrimDosis} \n Vacuna mas inoculada:  `);
}
