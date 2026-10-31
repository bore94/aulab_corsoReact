export function creaConvertitoreValuta(tasso) {
    return function (importo) {
        return importo * tasso;
    };
}
