import { ModeloPieza } from '../componentes/clases'
import { models } from '../componentes/model'
import { vistaGuardarPartida } from '../vistas/vistaGuardarPartida'

export const panel = {
  matriz: [
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  ],

  partidaIniciada: false,

  pintaPanel: () => {
    const IDpanel = document.querySelector('#panel')
    console.log()
    IDpanel.innerHTML = ''
    const coloresArray = ['','','rgb(64, 230, 64)' ,'rgb(255, 255, 0)' ,'rgb(211, 39, 211)' ,'red' ,'aqua' ,'rgb(255, 182, 47)' ,'rgb(255, 190, 201)' ]
    
    for (let fila = 0; fila < panel.matriz.length-1; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'
      
      for (let columna = 1; columna < panel.matriz[columna].length-1; columna++) {
        let divCeldas = ''

        if (panel.matriz[fila][columna] == 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        }

        if(panel.matriz[fila][columna] >= 2 ){
          let color = panel.matriz[fila][columna]
          divCeldas = `<div class="celda border-secondary" style="background-color: ${coloresArray[color]};"></div>`;
        }

        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpanel.innerHTML += divFilas
    }
  },

  crearNuevaPieza: () => {
    const aleatorioModelo = Math.floor(Math.random() * 7)

    let ancho = models[aleatorioModelo].pieza[0]
    ancho = ancho[0].length

    let aleatorioX
    switch (ancho) {
      case 1:
        aleatorioX = Math.floor(Math.random() * 10) + 1
        break
      case 2:
        aleatorioX = Math.floor(Math.random() * 9) + 1
        break
      case 3:
        aleatorioX = Math.floor(Math.random() * 8) + 1
        break
      case 4:
        aleatorioX = Math.floor(Math.random() * 7) + 1
        break
    }

    const pieza = new ModeloPieza(aleatorioModelo, aleatorioX, 1, 0)

    return pieza
  },

  nuevaPieza: null,

  insertarPieza: () => {
    let todasPosicionesDisponibles = true;

    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
        for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
            if (panel.nuevaPieza.matriz[i][j] === (panel.nuevaPieza.modelo + 2)) { //MIRO SI EN LA MATRIZ DE NUEVA PIEZA HAY VALOR Y NO 0 
                if (panel.matriz[panel.nuevaPieza.y + i][panel.nuevaPieza.x + j] > 0) { //MIRO SI EN EL PANEL MATRIZ EN LA Y - X QUE VOY A AÑADIRLO AY HUECO PARA PODER INSERTARLA
                    todasPosicionesDisponibles = false;
                    break; //ROMPER EL BUCLE CUANDO ALGO ESTE LLENO DONE VAYAMOS A PINTAR
                }
            }
        }

        if (!todasPosicionesDisponibles) {
            break; // ROMPER EL BUCLE EXTERNO SI ALGO ESTÁ OCUPADO
        }
    }

    // SI TODAS ES TRUE INSERTAREMOS LA PIEZA
    if (todasPosicionesDisponibles) {
        for (let i = 0; i < panel.nuevaPieza.altura; i++) {
            for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
                if (panel.nuevaPieza.matriz[i][j] === (panel.nuevaPieza.modelo + 2)) {
                    panel.matriz[panel.nuevaPieza.y + i][panel.nuevaPieza.x + j] = panel.nuevaPieza.matriz[i][j];
                }
            }
        }
    } else {
        panel.finalizarPartida(); // ACABAR EL JUEGO SI HAY ALGO OCUPADO
    }
  },


  puntos: 0,
  lineas: 0,
  niveles: 1,
  tiempoTranscurrido: 0,

  controlTeclas: () => {
    
    document.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'ArrowRight':
          panel.moverDra()
          break
        case 'ArrowLeft':
          panel.moverIzq()
          break
        case 'ArrowDown':
          panel.bajar()
          break
        case 'ArrowUp':
          panel.borrarPieza()
          panel.nuevaPieza.girar()
          break
        case 'c':
        case 'C':
          panel.cambiarPieza();
          break
      }
    })
  },

  iniciarPartida: () => {
    panel.matriz = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]
    panel.controlTeclas()
    panel.nuevaPieza = panel.crearNuevaPieza()
    panel.insertarPieza()
    panel.pintaPanel()

    panel.puntos = 0
    panel.lineas = 0
    panel.niveles = 1
    panel.tiempoTranscurrido = 0

    panel.iniciarMovimiento()

  },

  borrarPieza: () => {
    for (let i = 0; i < panel.nuevaPieza.altura; i++) {
      for (let j = 0; j < panel.nuevaPieza.longitud; j++) {
        if(panel.nuevaPieza.matriz[i][j]==(panel.nuevaPieza.modelo + 2)){
          panel.matriz[panel.nuevaPieza.y+i][panel.nuevaPieza.x+j] = 0
        }
      }
    }
  },

  moverDra: () => {
    if (panel.nuevaPieza) {
        panel.borrarPieza();
        let nuevaX = panel.nuevaPieza.x + 1
        let colision = false;

        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                if (panel.nuevaPieza.matriz[y][x] && panel.matriz[y + panel.nuevaPieza.y][x + nuevaX]) {
                    colision = true
                    break
                }
            }

            if (colision) {
                break
            }
        }

        if (!colision && (panel.nuevaPieza.x + panel.nuevaPieza.longitud) < 11) {
            panel.nuevaPieza.x++
            panel.sumarPuntos(10)
        }

        panel.insertarPieza()
        panel.pintaPanel()
    }
  },

  moverIzq: () => {
    if (panel.nuevaPieza) {
        panel.borrarPieza()
        let nuevaX = panel.nuevaPieza.x - 1
        let colision = false

        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                if (panel.nuevaPieza.matriz[y][x] && panel.matriz[y + panel.nuevaPieza.y][x + nuevaX]) {
                    colision = true
                    break
                }
            }

            if (colision) {
                break
            }
        }

        if (!colision && panel.nuevaPieza.x > 1) {
            panel.nuevaPieza.x--
            panel.sumarPuntos(10)
        }

        panel.insertarPieza()
        panel.pintaPanel()
    }
  },
  
  bajar: () => {
    //ACABAREMOS LA PARTIDA CUANDO ESTEMOS EN LA FILA Y = 1, Y ADEMAS TIENE CONTENIDO DEBAJO SE ACABA LA PARTIDA
    if (panel.nuevaPieza.y == 1) {
      let hayContenidoDebajo = false;
      for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
          if (panel.matriz[panel.nuevaPieza.y + panel.nuevaPieza.altura][panel.nuevaPieza.x + x] > 0) {
              hayContenidoDebajo = true;
              break;
          }
      }

      if (hayContenidoDebajo) {
          panel.finalizarPartida(); // Finalizar partida si la nueva pieza está en la primera fila y hay contenido debajo
          return;
      }
    }
  

    if ((panel.nuevaPieza.y + panel.nuevaPieza.altura) < 21) {
        panel.borrarPieza();
        panel.nuevaPieza.y++;

        for (let y = 0; y < panel.nuevaPieza.altura; y++) {
            for (let x = 0; x < panel.nuevaPieza.longitud; x++) {
                if (panel.nuevaPieza.matriz[y][x] && panel.matriz[y + panel.nuevaPieza.y][x + panel.nuevaPieza.x]) {
                    panel.nuevaPieza.y--
                    panel.insertarPieza()
                    panel.pintaPanel()
                    panel.sumarPuntos(10)
                    panel.limpiarLineas()
                    panel.nuevaPieza = panel.crearNuevaPieza()
                    return;
                }
            }
        }
        panel.insertarPieza()
        panel.pintaPanel()
        panel.sumarPuntos(10)
    } else {
        panel.sumarPuntos(50)
        panel.limpiarLineas()
        panel.nuevaPieza = panel.crearNuevaPieza()
    }
  },


  tiempo: null,

  piezaGuardada: undefined,
  cambiarPieza(){

    panel.borrarPieza()

    if(panel.piezaGuardada == undefined){

      panel.piezaGuardada = panel.nuevaPieza
      panel.nuevaPieza = panel.crearNuevaPieza()
      panel.pintaPiezaGuardada()

    }else{
      panel.pintaPiezaGuardada()
      let piezaReserva 
      piezaReserva = panel.nuevaPieza
      panel.nuevaPieza = panel.piezaGuardada
      panel.piezaGuardada = piezaReserva
    }

  },

  minutos: 0,
  segundos: 0,

  iniciarMovimiento: () => {

    panel.partidaIniciada=true

    panel.tiempo = setInterval(() => {

      panel.tiempoTranscurrido ++

      panel.minutos = Math.floor(panel.tiempoTranscurrido / 60);
      panel.segundos = panel.tiempoTranscurrido % 60;
      
      panel.minutos =  panel.minutos < 10 ? "0" +  panel.minutos :  panel.minutos;
      panel.segundos =  panel.segundos < 10 ? "0" +  panel.segundos :  panel.segundos;

      document.querySelector('#minutos').innerHTML =  panel.minutos
      document.querySelector('#segundos').innerHTML =  panel.segundos


      panel.bajar();

    }, 1000);

  },

  sumarPuntos: (puntos) => {
    panel.puntos += puntos
    document.querySelector('#puntos').innerHTML = panel.puntos
    panel.comprobarNivel(panel.puntos)

  },

  comprobarNivel: (puntosTotales) => {

    const nivelActual = Math.floor(puntosTotales / 5000) + 1 

    if (nivelActual > panel.niveles) { 
      panel.niveles = nivelActual
      panel.sumarPuntos(100)
      // panel.flash()
      panel.reset()
      actualizarNuevaPieza() 
    }
    document.querySelector('#nivel').innerHTML = panel.niveles; 
  },

  // flash: () => {
  //   const pantallaJuego = document.querySelector('#juego');
  //   pantallaJuego.style.backgroundColor = 'white';
  //   setTimeout(() => {
  //     pantallaJuego.style.backgroundColor = ''; 
  //   }, 1000); 
  // },

  reset: () => {
    panel.matriz = [
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ]

    panel.pintaPanel()
  },

  filaEntera: null,

  limpiarLineas: () => {
    for (let fila = 0; fila < panel.matriz.length - 1; fila++) {
      let filasElminadas=0
      if (panel.matriz[fila].every(celda => celda !== 0)) {
        panel.matriz.splice(fila, 1)
        panel.matriz.unshift([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1])
        filasElminadas++
      }
      panel.lineas += filasElminadas
      document.querySelector('#lineas').innerHTML = panel.lineas
    }
  },

  finalizarPartida: () => {
    console.log('FINALIZAR PARTIDA')
    clearInterval(panel.tiempo)
    document.querySelector('#juego').innerHTML= vistaGuardarPartida.template;
    vistaGuardarPartida.script()
  },

  pintaPiezaGuardada: () => {
    const IDpiezaSiguiente = document.querySelector('.piezaSiguiente2')
    IDpiezaSiguiente.innerHTML = ''
    const coloresArray = ['','','rgb(64, 230, 64)' ,'rgb(255, 255, 0)' ,'rgb(211, 39, 211)' ,'red' ,'aqua' ,'rgb(255, 182, 47)' ,'rgb(255, 190, 201)' ]
    
    for (let fila = 0; fila < panel.nuevaPieza.matriz.length; fila++) {
      let divFilas = '<div class="fila d-flex justify-content-center">'
      
      for (let columna = 0; columna < panel.nuevaPieza.matriz[fila].length; columna++) {
        let divCeldas = ''

        if (panel.nuevaPieza.matriz[fila][columna] == 0) {
          divCeldas += '<div class="celda bg-dark border-secondary"></div>'
        }

        if(panel.nuevaPieza.matriz[fila][columna] >= 2 ){
          let color = panel.nuevaPieza.matriz[fila][columna]
          divCeldas = `<div class="celda border-secondary" style="background-color: ${coloresArray[color]};"></div>`;
        }

        divFilas += divCeldas
      }
      divFilas += '</div>'
      IDpiezaSiguiente.innerHTML += divFilas
    }
  }

}
