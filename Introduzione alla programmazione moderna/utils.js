export function aggiungiContatti(oggetto, nomi) {
    oggetto.contatti = nomi;
    return oggetto;
}

export function elencaContatti({ contatti }) {
    return contatti.join(", ");
}