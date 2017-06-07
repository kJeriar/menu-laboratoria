function boton(){
	var lista = document.getElementById("listado");
	lista.setAttribute("class", "new");

    var elemento = Array.from(document.getElementsByClassName("listado"));
      elemento.forEach(function(el){
    el.setAttribute("class", "new");
  });
}
 
 function prueba(){
 	var botonStart = document.getElementById("lista");
	botonStart.addEventListener("click", boton);
}
 prueba();