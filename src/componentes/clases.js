import { models } from '../componentes/model'
import { panel } from '../componentes/panel' 

export class ModeloPieza {
    constructor (modelo, x = 0, y = 0, angulo = 0) {
      this.modelo = modelo
      this.angulo = angulo
      this.matriz = models[this.modelo].pieza[this.angulo]
      this.x = x
      this.y = y
      this.longitud = this.matriz[0].length
      this.altura = this.matriz.length
    }
  
    girar() {
      panel.sumarPuntos(20);
      const nuevoAngulo = (this.angulo + 1) % 4 //ME GUARDO EL PROXIMO ANGULO
      const nuevaMatriz = models[this.modelo].pieza[nuevoAngulo] //ME GUARDO LA MATRIZ DE LA NUEVAPIEZA GIRADA
      const nuevaLongitud = nuevaMatriz[0].length //ME GUARDO LA LONGITUD DE LA PIEZA GIRADA
      const nuevaAltura = nuevaMatriz.length //ME GUARDO LA ALTURA DE LA PIEZA GIRADA
      let colision = false

      for (let y = 0; y < nuevaAltura; y++) {
          for (let x = 0; x < nuevaLongitud; x++) {
              if (nuevaMatriz[y][x] && panel.matriz[this.y + y][this.x + x] > 0) { //COMPRUEBA SI EN POSICION DEL MODELO HAY ALGO MAYOR QUE 0 Y SI JUSTAMENTE EN LA Y Y LA X DONDE VA A GIRAR TAMBIEN HAY AGLO MAYOR QUE O
                  colision = true
                  break //SI  EXISTE COLISION, ROMPEMOS EL IF Y SALIMOS DEL BUCLE INTERNO
              }
          }
          if (colision) { //SI  EXISTE COLISION, ROMPEMOS EL BUCLE EXTERNO Y NO GIRAMOS
              break
          }
      }
   
      if (!colision) { //SI NO EXISTE COLISION, ES QUE ES FALSE, Y PODEMOS GIRAR
          this.angulo = nuevoAngulo //LOS GUARDO TODOS LOS VALORES
          this.matriz = nuevaMatriz //LOS GUARDO TODOS LOS VALORES
          this.longitud = nuevaLongitud //LOS GUARDO TODOS LOS VALORES
          this.altura = nuevaAltura //LOS GUARDO TODOS LOS VALORES
      }
    }
  }
