function attendi(millisecondi) {
    return new Promise((resolve) => {
        setTimeout(resolve, millisecondi);
    });
}

export async function caricaProdotti() {
    const risposta = await fetch("./prodotti.json");

    if (!risposta.ok) {
        throw new Error("Non riesco a leggere i prodotti");
    }

    const prodotti = await risposta.json();
    await attendi(2000);
    return prodotti;
}
