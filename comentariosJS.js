//creo la variable array para la base de datos
var DBase = ["Bienvenido al foro de NAOS, introduzca sus comentarios"];


function bienvenida() {
	document.getElementById("tabla").innerHTML += '<div class="comentIni">'+DBase[0]+'</div>';
	
}
//función que guarda el comentario del usuario

function chat() {
	
	function Mensage(comentario){
		this.comentario=comentario;
	}
//creación del objeto "mensaje" que captura el comentario
	var comentarios = document.getElementById("comentario").value;
	if (comentarios=="") {
		alert("No ha introducido ningun mensaje");
	}
	else{
	arraycomentario = new Mensage(comentarios);

	agregar();
	
	document.getElementById("comentario").value="";
	}

}

//función que agrega el comentario a la base de datos
	function agregar() {
		
		DBase.push(arraycomentario);
		console.log(DBase);

		document.getElementById("tabla").innerHTML += '<div class="coment">User: '+arraycomentario.comentario+'</div>';
		
	}
