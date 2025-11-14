// Crie uma função que analise um texto e retorne um JSON com algumas
// estatísticas:

const texto = "JavaScript é uma linguagem de programação. JavaScript é versátil e JavaScript é poderoso.";
function analisarTexto(texto) {
    const palavras = texto.split(" ");
    const frequenciaPalavras = {};
    let totalPalavras = 0;
    let somaTamanho = 0;

    palavras.forEach(p => {
        const palavra = p.toLowerCase();
        
        if (palavra.trim() === "") return;

        totalPalavras++;
        somaTamanho += palavra.length;

        frequenciaPalavras[palavra] = (frequenciaPalavras[palavra] || 0) + 1;
    });

    
    const listaFrequencias = Object.keys(frequenciaPalavras).map(palava => ({
        palavra: palava,
        frequencia: frequenciaPalavras[palava]
    }));

    return {
        totalPalavras,
        frequenciaPalavras: listaFrequencias,
        tamanhoMedioPalavras: somaTamanho / totalPalavras
    };
}
     // Deve retornar: {

// totalPalavras: X,
// frequenciaPalavras: [{palavra: "JavaScript", frequencia: 3}],
// tamanhoMedioPalavras: X.X
// }

console.log(analisarTexto(texto));
