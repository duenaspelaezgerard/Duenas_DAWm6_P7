import { vistaRanking } from "../vistas/vistaRanking.js"
import { vistaHome } from "../vistas/vistaHome.js"
import { vistaJoc } from "../vistas/vistaJoc.js";





export const header = {
    template:  //html
    `
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="btnHome" class="btn btn-success ms-2">HOME</button>
          <button id="btnRankings" class="btn btn-success ms-2">RANKING</button>
          <button id="btnJuego" class="btn btn-success ms-2">JUEGO</button>
        </div>
      </div>
    </nav>
    `,
    script : ()=>{
        document.querySelector('#btnHome').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaHome.template;
        });

        document.querySelector('#btnRankings').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaRanking.template;
          vistaRanking.script()
        });

        document.querySelector('#btnJuego').addEventListener('click', () => {
          document.querySelector('main').innerHTML= vistaJoc.template;
          vistaJoc.script()
        });


    }
}