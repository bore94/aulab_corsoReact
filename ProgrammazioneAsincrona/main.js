import { caricaProdotti } from "./prodotti.js";

const bottone = document.getElementById("mostra-prodotti");
const loader = document.getElementById("loader");
const contenitore = document.getElementById("prodotti");

bottone.addEventListener("click", async () => {
    bottone.hidden = true;
    loader.hidden = false;

    try {
        const prodotti = await caricaProdotti();
        loader.hidden = true;
        contenitore.replaceChildren(...prodotti.map(creaCard));
    } catch (errore) {
        loader.hidden = true;
        contenitore.textContent = "Errore nel caricamento dei prodotti.";
        console.error(errore);
    }
});

function creaCard(prodotto) {
    const card = document.createElement("article");
    card.className = "card";

    const nome = document.createElement("h2");
    nome.textContent = prodotto.nome;

    const categoria = document.createElement("p");
    categoria.textContent = prodotto.categoria;

    const prezzo = document.createElement("p");
    prezzo.textContent = formattaPrezzo(prodotto.prezzo);

    card.append(nome, categoria, prezzo);
    return card;
}

function formattaPrezzo(prezzo) {
    return new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "EUR"
    }).format(prezzo);
}
