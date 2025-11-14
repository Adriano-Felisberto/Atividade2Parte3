//Converta Query String da url para um objeto JSON. Observe que os parâmetros da
// query String são separados pelo caracter &

const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

function parseQueryString(query) {
// Retorne: {
    const parametros = query.split("&");
    const resultado = {};
    parametros.forEach(parametro => {
        const [chave, valor] = parametro.split("=");
        resultado[chave] = isNaN(valor) ? valor : parseFloat(valor);
    });
    return resultado;

//categoria: "eletronicos",
//preco: 500.00,
//marca: "samsung"],
//avaliacao: 4.5
// }
}

console.log(parseQueryString(queryString));
