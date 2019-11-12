
function inicio() {
  var h1 = document.getElementById('titulo');
  h1 = h1.remove()
  var boton = document.getElementById('boton');
  boton = boton.remove()
  var presentacion = document.getElementById('presentacion');

presentacion.insertAdjacentHTML('beforebegin',   `
<div id="stage0" class="escenario">
<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh" >
<img id= 'caballero' src='imagenes personajes y fondos/hiclipart.com-id_ngsqu.png' height="600vh" >
<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh">
</div>`);
presentacion.insertAdjacentHTML('beforebegin',`
 <p id= 'texto' >Eres un aventurero, el unico sin ningun poder en estas tierras magicas, que quiere llegar a un castillo muy lejano, no sabes muy bien que hay ahi, pero haz oido muchas rumores de que el que llega se le cumple sus deseos mas profundos, obtener grandes poderes (realmente no tienes idea *cof cof*) quien sabe que te depara... pero estas lleno de coraje y ansias de aventuras  . </p>`);
 presentacion.insertAdjacentHTML('beforebegin',`<button id="boton0" class= "boton" onclick="stage1()">Comenzar</button>` )
}

var vida = 100;
var oro = 100;
var karma = 0;

function menosOro() {
oro = oro + 2
console.log(`oro: ${oro}`)
}

function menosVida() {
  vida = vida -10
  console.log(`vide: ${vida}`)
}

function masKarma() {
  karma = karma + 5
  console.log(`karma: ${karma}`)
}

function menosKarma() {
  karma = karma - 5  
  console.log(`karma: ${karma}`)
}


function stage1 () {

  var stage0 = document.getElementById("stage0");
  stage0 = stage0.remove();
  var texto = document.getElementById("texto");
  texto = texto.remove();
  var boton0 = document.getElementById("boton0")
  boton = boton0.remove()


  var stage1 = document.getElementById ("stage1");


 stage1.insertAdjacentHTML('beforebegin',`
<div id="stage1" class= "stage">
 <img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh" >
 <img id = 'gandalf' src='imagenes personajes y fondos/5e9.gif' height="600vh" widht="300">
 <img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh">
</div>
<h2 id="texto"> Te encuentras con un mago de extraño, pero de aspecto familiar, que haces? </h2>
<div id = "botones">
  <button id="boton1"  class= "botonDecicion" onclick="menosOro() " > Dar 2 monedas de oro para que se vaya </button>
  <button id="boton2"  class= "botonDecicion"onclick="resultado2()">Duelo de persistencia </button>
  <button id="boton3" class= "botonDecicion" onclick="resultado3()"> Decirle donde esta sauron </button>
  <button id="boton4" class= "botonDecicion" onclick="menosKarma()"> Decirle que confiar en saruman es buena idea </button>
  </div>
  `)
}

function resultado2() {
  
  var stage1 = document.getElementById("stage1")
  stage1 = stage1.remove()
  var texto = document.getElementById("texto")
  texto = texto.remove()
  var botones = document.getElementById("botones")
  botones= botones.remove()

  var stage1 = document.getElementById ("stage1");

stage1.insertAdjacentHTML('beforebegin',`
<div class= "stage">

<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh" >
<img id = 'gandalf' src='imagenes personajes y fondos/f360cf386a93ecc14e0687efd8653716.gif' height="600vh" widht="300">
<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh">
</div>
<h2 id="texto">No puedaes soportar tanto poder, su proteccion es impenetrable</h2>
<div id = "botones">
<button id="boton1"  class= "botonDecicion" onclick=" " > continuar </button>
</div>

`)
}

function resultado3() {

  var stage1 = document.getElementById("stage1")
  stage1 = stage1.remove()
  var texto = document.getElementById("texto")
  texto = texto.remove()
  var botones = document.getElementById("botones")
  botones= botones.remove()

  var stage1 = document.getElementById ("stage1");

stage1.insertAdjacentHTML('beforebegin',`
<div class= "stage">

<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh" >
<img id = 'gandalf' src='imagenes personajes y fondos/giphy.gif' height="600vh" widht="300">
<img class = 'arbol' src='imagenes personajes y fondos/silhouette-tree-of-life-12.png' height="600vh">
</div>
<h2 id="texto">El mago se presenta, gandalf no podria estar mas agradesido</h2>
<div id = "botones">
<button id="boton1"  class= "botonDecicion" onclick=" " > continuar </button>
</div>

`)

}

