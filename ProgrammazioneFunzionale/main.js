import { aggiuggi, moltiplica, sottrai, dividi, calcola} from "./operazioni.js";
import { creaConvertitoreValuta } from "./convertitore.js";

const somma = calcola(10, 5, aggiuggi);
const prodotto = calcola(10, 5, moltiplica    );
const differenza = calcola(10, 5, sottrai);
const quoziente = calcola(10, 5, dividi);

const euroInDollari = creaConvertitoreValuta(1.1);
const euroInSterline = creaConvertitoreValuta(0.85);

const righe = [
    `10 + 5 = ${somma}`,
    `10 * 5 = ${prodotto}`,
    `10 - 5 = ${differenza}`,
    `10 / 5 = ${quoziente}`,
    `100 euro in dollari = ${euroInDollari(100)}`,
    `100 euro in sterline = ${euroInSterline(100)}`
];

righe.forEach((riga) => console.log(riga));
