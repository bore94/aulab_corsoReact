import { get_data } from "./prodotti.js";

const wrapper = document.querySelector("#wrapper");
const loader = document.querySelector("#loader");
const bottone = document.querySelector("#bottone");

const create_products = async () => {
    const data = await get_data();

    loader.style.display = "block";
    bottone.style.display = "none";

    setTimeout(() => {
        loader.style.display = "none";

        data.forEach((prodotto) => {
            const div = document.createElement("div");
            div.className = "card";
            div.innerHTML = `
                <p>Nome: ${prodotto.nome}</p>
                <p>Categoria: ${prodotto.categoria}</p>
                <p>Prezzo: ${prodotto.prezzo} €</p>
            `;
            wrapper.appendChild(div);
        });
    }, 2000);
};

bottone.addEventListener("click", () => {
    create_products();
});
