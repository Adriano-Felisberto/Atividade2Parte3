// a. Remover espaços vazios das extremidades nos nomes e deixar somente a
//    primeira letra de cada nome em maiúsculo;
// b. Email todo em minúsculo e validar formato;
// c. Converter idade para number e verificar se é maior de 18.

const usuariosJSON = `[
{"nome": "  carlos silva  ", "email": "CARLOS@EMAIL.COM", "idade": "25"},
{"nome": "MARIA", "email": "maria@email.com", "idade": "30"},
{"nome": "João Santos", "email": "joao@email.com", "idade": "17"}
]`;

function normalizarUsuarios(json) {
    const usuarios = JSON.parse(json);

    const usuariosNormalizados = usuarios.map(usuario => {

        const nome = usuario.nome
            .trim()
            .split(" ")
            .map(n => n.charAt(0).toUpperCase() + n.slice(1).toLowerCase())
            .join(" ");

        const email = usuario.email.toLowerCase();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        const idade = Number(usuario.idade);
        const maioridade = idade >= 18;

        return nome, email, emailValido, idade, maioridade
    });

    return usuariosNormalizados;
}

console.log(JSON.stringify(normalizarUsuarios(usuariosJSON), null, 2));

