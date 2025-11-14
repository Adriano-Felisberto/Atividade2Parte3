// Crie uma função que sanitize dados sensíveis em um objeto. Sanitizar nesse
// contexto significa remover ou esconder dados sensíveis.

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
    

    const dadosSani = JSON.parse(JSON.stringify(dados));

    dadosSani.usuarios = dadosSani.usuarios.map(u => {

        u.cpf = u.cpf.replace(
            /^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/,
            "***.***.***-$4"
        );

        u.cartaoCredito = u.cartaoCredito.replace(
            /^\d{4}-\d{4}-\d{4}-(\d{4})$/, "****-****-****-$1"
        );

        u.telefone = u.telefone.replace(
            /^\((\d{2})\) \d{5}-(\d{4})$/, "($1) *****-$2"
        );

        return u;
    });

    
    dadosSani.metadata.token = dadosSani.metadata.token.slice(0, 10) + "...";

    return dadosSani;
}


console.log(JSON.stringify(sanitizarDados(dadosSensiveis), null, 2));
