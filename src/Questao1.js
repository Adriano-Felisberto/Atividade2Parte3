// Dado o JSON abaixo, crie uma função que retorne um ArrayList de Strings
// formatadas: PRODUTO - R$ XX,XX (Categoria: XXXX)"

const produtosJSON = `{
"itens": [
{
"id": 1,
"nome": "Notebook Gamer",
"preco": 2999.99,
"categoria": "eletronicos",
"tags": ["tecnologia", "computacao", "gamer"]
},
{
"id": 2,
"nome": "Mesa Escritório",
"preco": 450.50,
"categoria": "moveis",
"tags": ["escritorio", "madeira", "profissional"]
}
]
}`;

function formatadordeitens(json) {
    const produto = JSON.parse(json);
    const listaformatada = produto.itens.map(item => {
        return `${item.nome} - R$${item.preco} (categoria: ${item.categoria })`;
    });
    return listaformatada;
    }

console.log(formatadordeitens(produtosJSON));