(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const d of n)if(d.type==="childList")for(const s of d.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function t(n){const d={};return n.integrity&&(d.integrity=n.integrity),n.referrerPolicy&&(d.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?d.credentials="include":n.crossOrigin==="anonymous"?d.credentials="omit":d.credentials="same-origin",d}function r(n){if(n.ep)return;n.ep=!0;const d=t(n);fetch(n.href,d)}})();const y=i=>{const a=i.split("T"),t=a[0].split("/"),r=a[1].split(":"),n=t[2],d=t[1],s=t[0],o=r[0],l=r[1],u=r[2],z=["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"];return`${parseInt(n)} ${z[parseInt(d)-1]} ${s.padStart(4,"20")} - ${o}:${l}:${u}`},P=i=>{let a=i;return a!=""?(a=a.toUpperCase(),a=a.trim(),a=a.replaceAll(" ","_"),a):null},k=i=>`${(i.getFullYear()%100).toString().padStart(2,"0")}/${(i.getMonth()+1).toString().padStart(2,"0")}/${i.getDate().toString().padStart(2,"0")}T${i.getHours().toString().padStart(2,"0")}:${i.getMinutes().toString().padStart(2,"0")}:${i.getSeconds().toString().padStart(2,"0")}`,c=[],L=i=>{i=i.toUpperCase();const a=c.filter(r=>r.nick.includes(i));let t="";a.length>0&&a.forEach(r=>{t+=`<tr>
        <td>${r.avatar}</td>
        <td>${r.nick}</td>
        <td>${r.puntos}</td>
        <td>${r.fecha}</td>
      </tr>`}),document.querySelector("#cuerpoTabla").innerHTML=t},p=(i,a)=>{let t="";switch(i){case"nick":return c.sort((r,n)=>r.nick.localeCompare(n.nick,"es",{sensitivity:"base"})),c.forEach(r=>{t+=` <tr>
                        <td>${r.avatar}</td>
                        <td>${r.nick}</td>
                        <td>${r.puntos}</td>
                        <td>${r.fecha}</td>
                      </tr>
                    `}),document.querySelector("#cuerpoTabla").innerHTML=t,a==="descendente"&&(flechaNick.classList.add("bi-arrow-down-square"),flechaNick.classList.remove("bi-arrow-up-square"),flechaPunt.classList.remove("bi-arrow-down-square"),flechaPunt.classList.add("bi-arrow-up-square"),flechaFecha.classList.remove("bi-arrow-down-square"),flechaFecha.classList.add("bi-arrow-up-square")),c;case"punt":return c.sort((r,n)=>n.puntos-r.puntos),c.forEach(r=>{t+=` <tr>
                      <td>${r.avatar}</td>
                      <td>${r.nick}</td>
                      <td>${r.puntos}</td>
                      <td>${r.fecha}</td>
                    </tr>
                  `}),document.querySelector("#cuerpoTabla").innerHTML=t,a==="descendente"&&(flechaPunt.classList.add("bi-arrow-down-square"),flechaPunt.classList.remove("bi-arrow-up-square"),flechaNick.classList.remove("bi-arrow-down-square"),flechaNick.classList.add("bi-arrow-up-square"),flechaFecha.classList.remove("bi-arrow-down-square"),flechaFecha.classList.add("bi-arrow-up-square")),c;case"fecha":c.sort((r,n)=>new Date(r.fecha)-new Date(n.fecha)),c.forEach(r=>{t+=` <tr>
                      <td>${r.avatar}</td>
                      <td>${r.nick}</td>
                      <td>${r.puntos}</td>
                      <td>${r.fecha}</td>
                    </tr>
                  `}),document.querySelector("#cuerpoTabla").innerHTML=t,a==="descendente"&&(flechaFecha.classList.add("bi-arrow-down-square"),flechaFecha.classList.remove("bi-arrow-up-square"),flechaNick.classList.remove("bi-arrow-down-square"),flechaNick.classList.add("bi-arrow-up-square"),flechaPunt.classList.remove("bi-arrow-down-square"),flechaPunt.classList.add("bi-arrow-up-square"))}},q=i=>{c.push(i),c.forEach(a=>{console.log(a.avatar),console.log(a.nick),console.log(a.puntos),console.log(a.fecha)})},v={template:`
        <div id="ranking" class="m-5 p-5 bg-dark"></div>

        <div id="partidas" class="m-5 p-5 bg-dark"></div>

    `,script:()=>{i();function i(){let o=` 
            <h2 class="text-center text-light">Ranking</h2>
            <table class="table table-dark align-middle">
              <theader>
                <tr class="bg-dark">
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </theader>
              <tbody id="cuerpoTablas">
                `;c.sort((l,u)=>u.puntos-l.puntos),c.forEach(l=>{o+=` <tr>
                      <td>${l.avatar}</td>
                      <td>${l.nick}</td>
                      <td>${l.puntos}</td>
                      <td>${l.fecha}</td>
                    </tr>
                  `}),o+=`
                  </tbody>
                  <tfoot></tfoot>
                </table>
              `,document.querySelector("#ranking").innerHTML=o}a(c);function a(o){let l=`
                <h2 class="text-center text-light">Partidas</h2>
                <div class="input-group mb-3">
                  <input id="inputBuscar" type="text" class="form-control" placeholder="Buscador" aria-label="Buscador" aria-describedby="button-addon2" />
                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon1"
                  >
                    <i class="bi bi-x-lg"></i>
                  </button>

                  <button
                    class="btn btn-outline-secondary"
                    type="button"
                    id="button-addon2"
                  >
                    <i class="bi bi-search"></i>
                  </button>
                </div>
                <table class="table table-dark">
                  <theader>
                    <tr>
                      <td></td>
                      <td>Nick <i id="flechaNick" class="bi bi-arrow-up-square"></i></td>
                      <td>Puntuación <i id="flechaPunt" class="bi bi-arrow-up-square"></i></td>
                      <td>Fecha <i id="flechaFecha" class="bi bi-arrow-up-square"></i></td>
                    </tr>
                  </theader>
                  <tbody id="cuerpoTabla">
              `;o.forEach(u=>{l+=`<tr><td>${u.avatar}</td><td>${u.nick}</td>
              <td>${u.puntos}</td><td>${u.fecha}</td></tr>`}),l+=`
                  </tbody>
                  <tfoot></tfoot>
                </table>
              `,document.querySelector("#partidas").innerHTML=l}document.querySelector("#button-addon1").addEventListener("click",function(){document.querySelector("#inputBuscar").value="",a(c)}),document.querySelector("#button-addon2").addEventListener("click",function(){let o=document.querySelector("#inputBuscar").value;L(o)}),document.querySelector("#flechaNick").addEventListener("click",function(){p("nick","descendente")}),document.querySelector("#flechaPunt").addEventListener("click",function(){p("punt","descendente")}),document.querySelector("#flechaFecha").addEventListener("click",function(){p("fecha","descendente")})}},f=[{nombre:"palo",color:"rgb(64, 230, 64)",pieza:[[[2],[2],[2],[2]],[[2,2,2,2]],[[2],[2],[2],[2]],[[2,2,2,2]]]},{nombre:"cuadrado",color:"rgb(255, 255, 0)",pieza:[[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]],[[3,3],[3,3]]]},{nombre:"te",color:"purple",pieza:[[[4,4,4],[0,4,0]],[[0,4],[4,4],[0,4]],[[0,4,0],[4,4,4]],[[4,0],[4,4],[4,0]]]},{nombre:"ele derecha",color:"red",pieza:[[[5,0],[5,0],[5,5]],[[5,5,5],[5,0,0]],[[5,5],[0,5],[0,5]],[[0,0,5],[5,5,5]]]},{nombre:"ele izquierda",color:"aqua",pieza:[[[0,6],[0,6],[6,6]],[[6,0,0],[6,6,6]],[[6,6],[6,0],[6,0]],[[6,6,6],[0,0,6]]]},{nombre:"ese derecha",color:"rgb(255, 182, 47)",pieza:[[[0,7,7],[7,7,0]],[[7,0],[7,7],[0,7]],[[0,7,7],[7,7,0]],[[7,0],[7,7],[0,7]]]},{nombre:"ese izquierda",color:"rgb(255, 190, 201)",pieza:[[[8,8,0],[0,8,8]],[[0,8],[8,8],[8,0]],[[8,8,0],[0,8,8]],[[0,8],[8,8],[8,0]]]}];class S{constructor(a,t=0,r=0,n=0){this.modelo=a,this.angulo=n,this.matriz=f[this.modelo].pieza[this.angulo],this.x=t,this.y=r,this.longitud=this.matriz[0].length,this.altura=this.matriz.length}girar(){e.sumarPuntos(20);const a=(this.angulo+1)%4,t=f[this.modelo].pieza[a],r=t[0].length,n=t.length;let d=!1;for(let s=0;s<n;s++){for(let o=0;o<r;o++)if(t[s][o]&&e.matriz[this.y+s][this.x+o]>0){d=!0;break}if(d)break}d||(this.angulo=a,this.matriz=t,this.longitud=r,this.altura=n)}}const m={template:`
        <div id="juego">
            <div class="row ">
                <div
                    class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
                >
                    <h4>Nivel: <span id="nivel">0</span></h4>
                    <h4>Tiempo: <span id="minutos">0</span>:<span id="segundos">00</span></h4>
                    <h4>Lineas: <span id="lineas">0</span></h4>
                    <h4>Puntos: <span id="puntos">0</span></h4>
                </div>
                <!-- Panel central -->
                <div class="col-4 d-flex justify-content-center position-relative">
                    <div id="panel" class="p-5">
                        <img src="/img/GAMEOVER.jpg" alt="Imagen"  style="height: 400px; width: 400px;">

                        <h3 class="mt-5">¿Quieres guardar la partida?</h3>
                        <button id="btnSi" class="btn btn-success ms-2">SI</button>
                        <button id="btnNo" class="btn btn-success ms-2">NO</button>
                    </div>
                </div>

                <div
                    class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                >
                    <div id="piezaSiguiente">
                        <h4>Pieza siguiente:</h4>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,script:()=>{document.querySelector("#puntos").innerHTML=e.puntos,document.querySelector("#nivel").innerHTML=e.niveles,document.querySelector("#minutos").innerHTML=e.minutos,document.querySelector("#segundos").innerHTML=e.segundos,document.querySelector("#lineas").innerHTML=e.lineas,document.querySelector("#btnSi").addEventListener("click",()=>{const i=prompt("Por favor, ingresa tu nick:");if(i===null||i===""){alert("Debes ingresar un nick para continuar.");return}const t={avatar:'<img src="/img/account-avatar-profile-user-5-svgrepo-com.svg" width="50"></img>',nick:P(i),puntos:e.puntos,fecha:""};let r=new Date;r=k(r),r=y(r),t.fecha=`${r}`,q(t),document.querySelector("main").innerHTML=v.template,v.script()}),document.querySelector("#btnNo").addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,v.script()})}},e={matriz:[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],partidaIniciada:!1,pintaPanel:()=>{const i=document.querySelector("#panel");console.log(),i.innerHTML="";const a=["","","rgb(64, 230, 64)","rgb(255, 255, 0)","rgb(211, 39, 211)","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let t=0;t<e.matriz.length-1;t++){let r='<div class="fila d-flex justify-content-center">';for(let n=1;n<e.matriz[n].length-1;n++){let d="";if(e.matriz[t][n]==0&&(d+='<div class="celda bg-dark border-secondary"></div>'),e.matriz[t][n]>=2){let s=e.matriz[t][n];d=`<div class="celda border-secondary" style="background-color: ${a[s]};"></div>`}r+=d}r+="</div>",i.innerHTML+=r}},crearNuevaPieza:()=>{const i=Math.floor(Math.random()*7);let a=f[i].pieza[0];a=a[0].length;let t;switch(a){case 1:t=Math.floor(Math.random()*10)+1;break;case 2:t=Math.floor(Math.random()*9)+1;break;case 3:t=Math.floor(Math.random()*8)+1;break;case 4:t=Math.floor(Math.random()*7)+1;break}return new S(i,t,1,0)},nuevaPieza:null,insertarPieza:()=>{let i=!0;for(let a=0;a<e.nuevaPieza.altura;a++){for(let t=0;t<e.nuevaPieza.longitud;t++)if(e.nuevaPieza.matriz[a][t]===e.nuevaPieza.modelo+2&&e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x+t]>0){i=!1;break}if(!i)break}if(i)for(let a=0;a<e.nuevaPieza.altura;a++)for(let t=0;t<e.nuevaPieza.longitud;t++)e.nuevaPieza.matriz[a][t]===e.nuevaPieza.modelo+2&&(e.matriz[e.nuevaPieza.y+a][e.nuevaPieza.x+t]=e.nuevaPieza.matriz[a][t]);else e.finalizarPartida()},puntos:0,lineas:0,niveles:1,tiempoTranscurrido:0,controlTeclas:()=>{document.addEventListener("keydown",i=>{switch(i.key){case"ArrowRight":e.moverDra();break;case"ArrowLeft":e.moverIzq();break;case"ArrowDown":e.bajar();break;case"ArrowUp":e.borrarPieza(),e.nuevaPieza.girar();break;case"c":case"C":e.cambiarPieza();break}})},iniciarPartida:()=>{e.matriz=[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],e.controlTeclas(),e.nuevaPieza=e.crearNuevaPieza(),e.insertarPieza(),e.pintaPanel(),e.puntos=0,e.lineas=0,e.niveles=1,e.tiempoTranscurrido=0,e.iniciarMovimiento()},borrarPieza:()=>{for(let i=0;i<e.nuevaPieza.altura;i++)for(let a=0;a<e.nuevaPieza.longitud;a++)e.nuevaPieza.matriz[i][a]==e.nuevaPieza.modelo+2&&(e.matriz[e.nuevaPieza.y+i][e.nuevaPieza.x+a]=0)},moverDra:()=>{if(e.nuevaPieza){e.borrarPieza();let i=e.nuevaPieza.x+1,a=!1;for(let t=0;t<e.nuevaPieza.altura;t++){for(let r=0;r<e.nuevaPieza.longitud;r++)if(e.nuevaPieza.matriz[t][r]&&e.matriz[t+e.nuevaPieza.y][r+i]){a=!0;break}if(a)break}!a&&e.nuevaPieza.x+e.nuevaPieza.longitud<11&&(e.nuevaPieza.x++,e.sumarPuntos(10)),e.insertarPieza(),e.pintaPanel()}},moverIzq:()=>{if(e.nuevaPieza){e.borrarPieza();let i=e.nuevaPieza.x-1,a=!1;for(let t=0;t<e.nuevaPieza.altura;t++){for(let r=0;r<e.nuevaPieza.longitud;r++)if(e.nuevaPieza.matriz[t][r]&&e.matriz[t+e.nuevaPieza.y][r+i]){a=!0;break}if(a)break}!a&&e.nuevaPieza.x>1&&(e.nuevaPieza.x--,e.sumarPuntos(10)),e.insertarPieza(),e.pintaPanel()}},bajar:()=>{if(e.nuevaPieza.y==1){let i=!1;for(let a=0;a<e.nuevaPieza.longitud;a++)if(e.matriz[e.nuevaPieza.y+e.nuevaPieza.altura][e.nuevaPieza.x+a]>0){i=!0;break}if(i){e.finalizarPartida();return}}if(e.nuevaPieza.y+e.nuevaPieza.altura<21){e.borrarPieza(),e.nuevaPieza.y++;for(let i=0;i<e.nuevaPieza.altura;i++)for(let a=0;a<e.nuevaPieza.longitud;a++)if(e.nuevaPieza.matriz[i][a]&&e.matriz[i+e.nuevaPieza.y][a+e.nuevaPieza.x]){e.nuevaPieza.y--,e.insertarPieza(),e.pintaPanel(),e.sumarPuntos(10),e.limpiarLineas(),e.nuevaPieza=e.crearNuevaPieza();return}e.insertarPieza(),e.pintaPanel(),e.sumarPuntos(10)}else e.sumarPuntos(50),e.limpiarLineas(),e.nuevaPieza=e.crearNuevaPieza()},tiempo:null,piezaGuardada:void 0,cambiarPieza(){if(e.borrarPieza(),e.piezaGuardada==null)e.piezaGuardada=e.nuevaPieza,e.nuevaPieza=e.crearNuevaPieza(),e.pintaPiezaGuardada();else{e.pintaPiezaGuardada();let i;i=e.nuevaPieza,e.nuevaPieza=e.piezaGuardada,e.piezaGuardada=i}},minutos:0,segundos:0,iniciarMovimiento:()=>{e.partidaIniciada=!0,e.tiempo=setInterval(()=>{e.tiempoTranscurrido++,e.minutos=Math.floor(e.tiempoTranscurrido/60),e.segundos=e.tiempoTranscurrido%60,e.minutos=e.minutos<10?"0"+e.minutos:e.minutos,e.segundos=e.segundos<10?"0"+e.segundos:e.segundos,document.querySelector("#minutos").innerHTML=e.minutos,document.querySelector("#segundos").innerHTML=e.segundos,e.bajar()},1e3)},sumarPuntos:i=>{e.puntos+=i,document.querySelector("#puntos").innerHTML=e.puntos,e.comprobarNivel(e.puntos)},comprobarNivel:i=>{const a=Math.floor(i/5e3)+1;a>e.niveles&&(e.niveles=a,e.sumarPuntos(100),e.reset(),actualizarNuevaPieza()),document.querySelector("#nivel").innerHTML=e.niveles},reset:()=>{e.matriz=[[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,0,0,0,0,0,0,0,0,0,0,1],[1,1,1,1,1,1,1,1,1,1,1,1]],e.pintaPanel()},filaEntera:null,limpiarLineas:()=>{for(let i=0;i<e.matriz.length-1;i++){let a=0;e.matriz[i].every(t=>t!==0)&&(e.matriz.splice(i,1),e.matriz.unshift([1,0,0,0,0,0,0,0,0,0,0,1]),a++),e.lineas+=a,document.querySelector("#lineas").innerHTML=e.lineas}},finalizarPartida:()=>{console.log("FINALIZAR PARTIDA"),clearInterval(e.tiempo),document.querySelector("#juego").innerHTML=m.template,m.script()},pintaPiezaGuardada:()=>{const i=document.querySelector(".piezaSiguiente2");i.innerHTML="";const a=["","","rgb(64, 230, 64)","rgb(255, 255, 0)","rgb(211, 39, 211)","red","aqua","rgb(255, 182, 47)","rgb(255, 190, 201)"];for(let t=0;t<e.nuevaPieza.matriz.length;t++){let r='<div class="fila d-flex justify-content-center">';for(let n=0;n<e.nuevaPieza.matriz[t].length;n++){let d="";if(e.nuevaPieza.matriz[t][n]==0&&(d+='<div class="celda bg-dark border-secondary"></div>'),e.nuevaPieza.matriz[t][n]>=2){let s=e.nuevaPieza.matriz[t][n];d=`<div class="celda border-secondary" style="background-color: ${a[s]};"></div>`}r+=d}r+="</div>",i.innerHTML+=r}}},b={template:`
        <div id="juego">
            <div class="row ">
                <div
                    class="col-4 d-flex flex-column justify-content-end align-items-center p-5"
                >
                    <h4>Nivel: <span id="nivel">0</span></h4>
                    <h4>Tiempo: <span id="minutos">0</span>:<span id="segundos">00</span></h4>
                    <h4>Lineas: <span id="lineas">0</span></h4>
                    <h4>Puntos: <span id="puntos">0</span></h4>
                </div>
                <!-- Panel central -->
                <div class="col-4 d-flex justify-content-center">
                    <div id="panel" class="p-5">
                        
                    </div>
                </div>
                <div
                    class="col-4 d-flex flex-column justify-content-start align-items-center p-5"
                >
                    <div id="piezaSiguiente">
                        <h4>Pieza siguiente:</h4>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                        <div class="piezaSiguiente m-2">
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-dark border-secondary"></div>
                            </div>
                            <div class="fila d-flex justify-content-center">
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                                <div class="celda bg-primary bg-gradient border-dark"></div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div id="piezaGuardada">
                        <h4>Pieza guardada:</h4>
                        <div class="piezaGuardada">
                            <div class="piezaSiguiente2 m-2">
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                                <div class="fila d-flex justify-content-center">
                                    <div class="celda bg-warning bg-gradient border-dark"></div>
                                    <div class="celda bg-warning border-secondary"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `,script:()=>{e.iniciarPartida()}},g={template:`
        <div class="d-flex align-items-center justify-content-center">
            <img src="/img/logo.png" alt="logo" width="200" class="mt-5" />
        </div>
        <div id="intro" class="text-center p-5 ">
            <p>Tetris és un videojoc de tipus trencaclosques. Fou inventat per l'enginyer informàtic rus Aleksei Pàjitnov l'any 1984,[1] mentre treballava a l'Acadèmia de Ciències de Moscou.</p>
            
            <h2>Instruccions:</h2>
            
            <p>Pots moure les peces fent servir les fletxes d'esquerra i dreta</p>
            
            <p>Amb la fletxa avall pots girar la peça</p>
            
            <p>'<strong>Ñ</strong>' per canviar la peça actual per la peça que està a punt de sortir (que pots veure a la columna de la dreta)</p>
            
            <p> Al final de la partida podràs desar la teva puntuació, i verue el ranking de jugadors</p>
            
            <button id="btnJuegos" class="btn btn-success fs-1 mt-5">JUGAR</button>
            <hr/>
        </div>
    `,script:()=>{document.querySelector("#btnJuegos").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()})}},h={template:`
    <nav class="navbar navbar-light bg-dark">
      <div class="container-fluid">
        <div class="mx-auto">
          <button id="btnHome" class="btn btn-success ms-2">HOME</button>
          <button id="btnRankings" class="btn btn-success ms-2">RANKING</button>
          <button id="btnJuego" class="btn btn-success ms-2">JUEGO</button>
        </div>
      </div>
    </nav>
    `,script:()=>{document.querySelector("#btnHome").addEventListener("click",()=>{document.querySelector("main").innerHTML=g.template}),document.querySelector("#btnRankings").addEventListener("click",()=>{document.querySelector("main").innerHTML=v.template,v.script()}),document.querySelector("#btnJuego").addEventListener("click",()=>{document.querySelector("main").innerHTML=b.template,b.script()})}};document.querySelector("header").innerHTML=h.template;h.script();document.querySelector("main").innerHTML=g.template;g.script();
