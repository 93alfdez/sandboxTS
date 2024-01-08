import { Estado, MAXIMO_INTENTOS, partida } from "./modelo";

export const generarNumeroAleatorio = (): number => Math.floor(Math.random() * 101);

const hasSuperadoElNumeroMaximoDeIntentos = (): boolean => partida.numeroDeIntentos >= MAXIMO_INTENTOS;

export const gestionarGameOver = (estado: Estado) => {
    if (estado === "GAME_OVER_MAXIMO_INTENTOS") {
        const elementoComprobar = document.getElementById("comprobar");
        if (elementoComprobar && elementoComprobar instanceof HTMLButtonElement) {
            elementoComprobar.disabled = true;
        } else {
            console.error(
                "gestionarGameOver: No se ha encontrado el elemento con id comprobar"
            );
        }
    }
};

export const comprobarNumero = (texto: string): Estado => {
    const numero = parseInt(texto);
    const esUnNumero = !isNaN(numero);
    if (!esUnNumero) {
        return "NO_ES_UN_NUMERO";
    }
    if (numero === partida.numeroParaAcertar) {
        return "ES_EL_NUMERO_SECRETO";
    }
    if (hasSuperadoElNumeroMaximoDeIntentos()) {
        return "GAME_OVER_MAXIMO_INTENTOS";
    }
    return numero > partida.numeroParaAcertar
        ? "EL_NUMERO_ES_MAYOR"
        : "EL_NUMERO_ES_MENOR";
};