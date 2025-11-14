# Atividade2Parte3

### 1. Dado o JSON abaixo, crie uma função que retorne um ArrayList de Strings
### formatadas: PRODUTO - R$ XX,XX (Categoria: XXXX)"

```js
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

```
### 2. Crie uma função que analise um texto e retorne um JSON com algumas
### estatísticas:
```js
const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";

function analisarTexto(texto) {
// Deve retornar: {
//totalPalavras: X,
//frequenciaPalavras: [{palavra: "JavaScript", frequencia: 3}],
//tamanhoMedioPalavras: X.X
// }
}
```
### 3. Crie uma função que normalize os dados dos usuários seguindo as regras:
### a. Remover espaços vazios das extremidades nos nomes e deixar somente a
### primeira letra de cada nome em maiúsculo;
### b. Email todo em minúsculo e validar formato;
### c. Converter idade para number e verificar se é maior de 18.
```js
const usuariosJSON = `[
{"nome": "
carlos silva
", "email": "CARLOS@EMAIL.COM", "idade": "25"}
,
{"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
{"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function normalizarUsuarios(json) {
// - Trim nos nomes e capitalize
// - Email em minúsculo
// - Converter idade para number e verificar se é maior de 18 (adicione
mais um campo no json).
// - Retornar os dados normalizados.
}
```
### 4. Crie uma função que sanitize dados sensíveis em um objeto. Sanitizar nesse
### contexto significa remover ou esconder dados sensíveis.
```js
const dadosSensiveis = {
usuarios: [
{
cpf: "123.456.789-00",
cartaoCredito: "5555-6666-7777-8888",
telefone: "(11) 99999-9999",
nome: "Fulano de Tal"
}
],
metadata: {
ip: "192.168.1.100",
token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9"
}
};
function sanitizarDados(dados) {
// Mascare: CPF (***.***.***-00), cartão (****-****-****-8888), telefone
((11) *****-9999), token (primeiros 10 chars + ...)
}
```

### 5. Converta Query String da url para um objeto JSON. Observe que os parâmetros da
### query String são separados pelo caracter &.
```js
const queryString = "categoria=eletronicos&preco=500&marca=samsung&avaliacao=4.5";

function parseQueryString(query) {
// Retorne: {
//categoria: "eletronicos",
//preco: 500.00,
//marca: "samsung"],
//avaliacao: 4.5
// }
}
```


[Link das resoluções](https://github.com/Adriano-Felisberto/Atividade2Parte3/tree/Adriano-Felisberto/I.A-ECIT/src)
