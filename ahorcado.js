var palabras = ['Aprendizaje','Secreto','Besar','Maldito','Llave','Situacion','Prescindible','Cuidar','Horroroso','Profetico','Evitar','Inflamable','Jarra','Humano','Botella','Marco','Dosis','Balistica','Celebridad','Furioso','Paciente','Prefabricado','Subasta','Placido','Instrumento','Entero','Desgarrador','Buscar','Polvo','Amputacion','Venir','Pareja','Rosa','Pinzon','Disfuncional','Robin','Acero','Puro','Rancio','Tembloroso','Inteligente','Empujar','Bear','Experimento','Plegable','Infantil','Soplar','Identico','Cercana','Arandano','Pasear','Repartir','Cauteloso','Dolorido','Profuso','Bateria','Diversion','Juego','Retener','Contenedor','Evocar','Retorcer','Reminiscente','Abandonado','Propaganda','Gestion','Estres','Inmolar','optimo','Cultural','Ingenioso','Infundir','Hervir','Astuto','Desertor','Camello','Pudrirse','Mutageno','Pegajoso','Analisis','Sollozar','Precioso','Ahogado','Infierno','Decimo','Caida','Educar','Adicto','Hija','Ver','Rosa','Axiomatico','Vomitar','Dudoso','Arrullo','Asociacion','Agradecer','Federacion','Galan','Desorientacion','Humedo','Reunion','Mejor','Absurdos','Fondo','Encontrar','Manzana','Encajar','Absorbible','Gobernar','Efusivo','Espiritual','Herida','Clasificar','Cordon','Cientifico','Ingenieria', 'Largo', 'Integral', 'Zona', 'Religion', 'Indio', 'Manteca', 'Bolsillo', 'Urna', 'Grano'];
var eleccion = '';
var estadoEleccion = [];
var vidas = -1;
var imagenes = ['url(img/0.png)','url(img/1.png)', 'url(img/2.png)', 'url(img/3.png)', 'url(img/4.png)', 'url(img/5.png)', 'url(img/6.png)', 'url(img/7.png)', 'url(img/8.png)', 'url(img/9.png)'];

function seleccionPalabra(){
  var aleatorio = Math.floor(Math.random()*palabras.length);
  eleccion = palabras[aleatorio].toLowerCase();
  console.log(eleccion);
  for (i=0; i<eleccion.length; i++){
    estadoEleccion.push('_');
  }
  setTimeout(()=>{document.getElementById("palabraOculta").innerText=estadoEleccion.join("");},500);
  console.log(estadoEleccion.join(""));
}

seleccionPalabra();


function comprobarLetra(letra){
  var found = false;
  for (i=0; i<eleccion.length; i++){
    if (eleccion.charAt(i) === letra){
      estadoEleccion[i] = letra;
      document.getElementById("palabraOculta").innerText=estadoEleccion.join("");
      console.log(estadoEleccion)
      found = true;
    }
  }if(!found){
    vidas++;
    document.getElementById("wanted").style.backgroundImage=imagenes[vidas];
  }
console.log(vidas);
  if(estadoEleccion.join("") === eleccion){
    finalPartida();
  }
  if(vidas === 9){
  document.getElementById("felicitacion").innerText='LO SIENTO, HAS PERDIDO';
    finalPartida();
  }
  desactivarLetra(letra);
}

function desactivarLetra(letra){
  var anular = document.getElementById(letra);
  anular.setAttribute('disabled', '');
}

function finalPartida(){
  var botonesRestantes=document.querySelectorAll('button');
  botonesRestantes.forEach(boton =>{
    boton.setAttribute('disabled', '');
  })
  document.getElementById("resultado").style.zIndex=0;
  document.getElementById("resultado").style.animationPlayState='running';
  setTimeout(()=>{window.location.reload()},6000);
}


3
