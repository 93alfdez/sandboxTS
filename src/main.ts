import { partida } from "./modelo";
import { generarNumeroAleatorio } from "./motor";

import { handleCompruebaClick, iniciaPartida } from "./ui";

// TODO: Mover esto a DOM Loaded
partida.numeroParaAcertar = generarNumeroAleatorio();


document.addEventListener("DOMContentLoaded", iniciaPartida);


const botonComprobar = document.getElementById("comprobar");
botonComprobar?.addEventListener("click", handleCompruebaClick);