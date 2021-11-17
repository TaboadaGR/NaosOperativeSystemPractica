//función que refresca la página
function refresh()
{
    window.location.reload();
}

//Función que muestra las especificaciones de las distintas versiones de Naos y muestra el precio si se amplia el espacio en la nube. 
function espacioExtra(){

document.getElementById("table-body-V1").innerHTML = '';
document.getElementById("table-body-V2").innerHTML = '';
document.getElementById("table-body-V3").innerHTML = '';	

	var v1Precio = 75;
	var v2Precio = 90;
	var v3Precio = 120;

	var x = document.getElementById("seleccion").value;

	var v1Precio = v1Precio+(x*2/8);
	var v2Precio = v2Precio+(x*2/8);
	var v3Precio = v3Precio+(x*2/8);

	let V1 = ["1 TB HDD de espacio en la nube","Cómodos atajos de terminal","Acceso a libreria de comandos internas","Procesamiento muy rápido","Entorno de pruebas de comandos",v1Precio+"$"];
		let V2 = ["1.5 TB HDD de espacio en la nube","Programas de texto avanzado implementados","convertidor de archivos integrado","Procesamiento muy rápido","Entorno de pruebas de código seguro",v2Precio+"$"];
		let V3 = ["750 GB SSD de espacio en la nube","Cómodos atajos de terminal","Acceso a libreria de comandos internas","Procesamiento muy rápido","Entorno de pruebas de comandos",v3Precio+"$"];

		for (var i = 0; i<V1.length; i++) {
			
			if ((i+1)==V1.length) {
				document.getElementById("table-body-V1").innerHTML += '<tr><td style="background-color:#DEDEDE; text-align: center; border: outset;">'+V1[i]+'</tr></td>';
			}
			else{
			document.getElementById("table-body-V1").innerHTML += '<tr><td>'+V1[i]+'</tr></td>';
			}
		}	
		for (var i = 0; i<V2.length; i++) {
			if ((i+1)==V2.length) {
				document.getElementById("table-body-V2").innerHTML += '<tr><td style="background-color:#DEDEDE; text-align: center; border: outset;">'+V2[i]+'</tr></td>';
			}
			else{
			document.getElementById("table-body-V2").innerHTML += '<tr><td>'+V1[i]+'</tr></td>';
			}
		}
		for (var i = 0; i<V3.length; i++) {
			if ((i+1)==V3.length) {
				document.getElementById("table-body-V3").innerHTML += '<tr><td style="background-color:#DEDEDE; text-align: center; border: outset;">'+V3[i]+'</tr></td>';
			}
			else{
			document.getElementById("table-body-V3").innerHTML += '<tr><td>'+V3[i]+'</tr></td>';
			}
		}	

}
