/*Nota para el lector: agrega pendientes, elimina el pendiente en la posicion 0 del array.
Crea la plantilla de listas nuevas pero no obtiene el valor del input de esa nueva lista
 (obtiene el valor del input de la lista fija de muestra) y no lo imprime en el elemento lista de de esa nueva plantilla lista
 (lo imprime en la lista fija de muestra)*/

var listas=[];
var pendientes=[];

function agregarPrendiente() {
  var inputPendiente= document.getElementById("inputPendiente").value;//Traduzco el elemento HTML, (en este caso un input) a una variable JS
  var areaListaPendientes= document.getElementById("lista1");//Traduzco el elemento HTML (a variable JS) que sera el area donde voy a poner el nodo hijo
  var node= document.createElement("li");//defino el elemento que voy a crear, en este caso un inciso de lista
  var textNode= document.createTextNode(inputPendiente);//digo de donde voy a sacar el texto que le pondre al nodo hijo
  node.appendChild(textNode);//al nodo creado le pongo de hijo el texto
  var nodoBoton=document.createElement("BUTTON");//creo un elemento boton
  nodoBoton.setAttribute("onclick","eliminarPendiente();");//a ese elemento boton le pongo atributos
  nodoBoton.innerHTML="x"//al boton le pongo contenido utilizando DOM
  node.appendChild(nodoBoton);//al nodo (inciso de lista) que ya tiene de hijo el texto, le pongo al boton como otro hijo
  areaListaPendientes.appendChild(node);//al elemento area de impresion le pongo de hijo al nodo que ya trae todo lo anterior
  document.getElementById("inputPendiente").value= "";//esta liena borra el valor del input
  pendientes.push(node);//meto mi nodo (pendiente) al arreglo pendientes[]
}

function eliminarPendiente(pendientes) {
  var lista1 = document.getElementById("lista1");
  lista1.removeChild(lista1.childNodes[0]);
}

function agregarLista() {
  //titulo
  var contenedorDeListas= document.getElementById("contenedorDeListas");
  var inputLista= document.getElementById("inputLista").value;
  var nodeTitulo= document.createElement("h2");
  var textNode= document.createTextNode(inputLista);
  nodeTitulo.appendChild(textNode);
  contenedorDeListas.appendChild(nodeTitulo);
  document.getElementById("inputLista").value="";
  //input para pendientes
  var nodeInput= document.createElement("input");
  nodeInput.setAttribute("placeholder","Ingresa pendiente");
  contenedorDeListas.appendChild(nodeInput);

  var nodeLista= document.createElement("ul");
  contenedorDeListas.appendChild(nodeLista);
/*  nodeInput= document.getElementById("nodeInput").value;
  var textNodeLista= document.createTextNode(nodeInput);
  nodeLista.appendChild(textNodeLista);*/

  //boton agrega pendientes
  var nodeBoton=document.createElement("BUTTON");//
  nodeBoton.setAttribute("onclick","agregarPrendiente();");//Cuando llamo a la funcion no se como decirle que sea de este input creado
  nodeBoton.innerHTML="Crear Pendiente";
  contenedorDeListas.appendChild(nodeBoton);
}

  function prueba() {
    alert("hola");
  }
