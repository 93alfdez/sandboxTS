import { Estado, MAXIMO_INTENTOS, partida } from "./modelo";

import { gestionarGameOver, comprobarNumero, generarNumeroAleatorio } from "./motor";

export const muestraNumeroDeIntentos = () => {
    const elementoIntentos = document.getElementById("intentos");
    if (elementoIntentos) {
        elementoIntentos.innerHTML = `${partida.numeroDeIntentos} de ${MAXIMO_INTENTOS}`;
    } else {
        console.error(
            "muestraNumeroDeIntento: No se ha encontrado el elemento con id intentos"
        );
    }
};

const muestraMensajeComprobacion = (texto: string, estado: Estado) => {
    let mensaje: string = "";
    switch (estado) {
        case "NO_ES_UN_NUMERO":
            mensaje = `"${texto}" no es un numero 🤨, prueba otra vez`;
            break;
        case "EL_NUMERO_ES_MAYOR":
            mensaje = `UUYYY ! El número ${texto} es MAYOR que el número secreto`;
            break;
        case "EL_NUMERO_ES_MENOR":
            mensaje = `UUYYY ! El número ${texto} es MENOR que el número secreto`;
            break;
        case "ES_EL_NUMERO_SECRETO":
            mensaje = `¡¡¡Enhorabuena, has acertado el número!!! 🎉🎉🎉`;
            break;
        case "GAME_OVER_MAXIMO_INTENTOS":
            mensaje = `🪦 GAME OVER, has superado el número máximo de intentos`;
            break;
        default:
            mensaje = "No se que ha pasado, pero no deberías estar aquí";
            break;
    }
    const elementoResultado = document.getElementById("resultado");
    if (elementoResultado) {
        elementoResultado.innerHTML = mensaje;
    } else {
        console.error(
            "muestraMensajeComprobacion: No se ha encontrado el elemento con id resultado"
        );
    }
};

export const handleCompruebaClick = () => {
    let texto: string = "";
    const inputElement = document.getElementById("numero");
    if (inputElement && inputElement instanceof HTMLInputElement) {
        texto = inputElement.value;
    }
    const estado: Estado = comprobarNumero(texto);
    muestraMensajeComprobacion(texto, estado);
    partida.numeroDeIntentos++;
    muestraNumeroDeIntentos();
    gestionarGameOver(estado);
};

export const iniciaPartida = () => {
    partida.numeroParaAcertar = generarNumeroAleatorio();
    partida.numeroDeIntentos = 0;
    muestraNumeroDeIntentos();
}