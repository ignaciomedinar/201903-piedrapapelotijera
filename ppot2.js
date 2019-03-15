var piedra1=document.getElementById("piedrahtml");
var papel1=document.getElementById("papelhtml");
var tijera1=document.getElementById("tijerashtml");
var nombre1=document.getElementById('nombrehtml');
var scorecpu=0;
var scoreusuario=0;
var piedra="piedra";
var papel="papel";
var tijera="tijera";

piedra1.addEventListener("click",juegaPiedra);
papel1.addEventListener("click",juegaPapel);
tijera1.addEventListener("click",juegaTijera);
nombre1.addEventListener("click",boton)

function juegaPiedra(){
  usuario="piedra";
  console.log(usuario);
  jugar();
}
function juegaPapel(){
  usuario="papel";
  console.log(usuario);
  jugar();
}
function juegaTijera(){
  usuario="tijera";
  console.log(usuario);
  jugar();
}
function leerNombre(){
  persona=nombre1.value;
  if (!!persona){
    empezarJuego();
  }
}

function empezarJuego(){
  alert('Escoge elemento, el juego es 2 de 3')
  scorecpu=0;
  scoreusuario=0;
}

function jugar(){

  var cpu= Math.floor(Math.random()*(3 - 1 +1) + 1);
    switch (cpu) {
      case 1:
      cpu="piedra";
      break;
      case 2:
      cpu="papel";
      break;
      case 3:
      cpu="tijera";
      break;
      default:
      cpu="Nel"
    }
    
    if (usuario==cpu){
      console.log("Jugador: ",persona," Escogió: ",usuario);
      console.log("Jugador: CPU Escogió: ",cpu);
      console.log("Empate");
      console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
    }else if ((usuario==piedra && cpu==papel) || (usuario==papel && cpu==tijera) || (usuario==tijera && cpu==piedra)){
      console.log("Jugador: ",persona," Escogió: ",usuario);
      console.log("Jugador: CPU Escogió: ",cpu);
      console.log("Punto para: CPU");
      scorecpu+=1
      console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
    }else {
      console.log("Jugador: ",persona," Escogió: ",usuario);
      console.log("Jugador: CPU Escogió: ",cpu);
      console.log("Punto para: ",persona);
      scoreusuario+=1
      console.log(persona,": ",scoreusuario," CPU: ",scorecpu);
    }

    if (scorecpu==2){
      score();
    } else if (scoreusuario==2){
      score();
    }
  }

  function score(){
    if (scoreusuario>scorecpu){
      console.log("Ganó ",persona);
      leerNombre();
    }else{
      console.log("Ganó CPU");
      leerNombre();
    }
  }
