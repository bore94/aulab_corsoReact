import { student } from "./student.js";
import { aggiungiContatti, elencaContatti } from "./utils.js";

const studenteConContatti = aggiungiContatti(
    student,
    ["Marco", "Giulia", "Andrea"]
);

const risultato = elencaContatti(studenteConContatti);

console.log(risultato);
document.getElementById("risultato").textContent = risultato;