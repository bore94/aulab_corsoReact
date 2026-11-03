export const get_data = async () => {
    const promise = await fetch("./prodotti.json");
    const json = await promise.json();
    return json;
};
