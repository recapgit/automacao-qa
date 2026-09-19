type CasoDeTeste = {
    id: number,
    titulo: string,
    descricao: string,
    automatizado: boolean,
};

function criarCasoDeTeste(id: number, titulo: string, descricao: string, automatizado: boolean): CasoDeTeste {
    return {
        id,
        titulo,
        descricao,
        automatizado
    };
};

function descrever(caso: CasoDeTeste): string {
    return `ID #${caso.id}, Título: ${caso.titulo} - Desc.: ${caso.descricao} - Automatizado: ${caso.automatizado}`;
};

function marcarAutomatizado(caso: CasoDeTeste): CasoDeTeste {
    caso.automatizado = true
    return caso;
};

const casoDeTeste1 = criarCasoDeTeste(
    1,
    "Testar login",
    "Ver se o usuário consegue realizar login",
    false
);

const casoDeTeste2 = criarCasoDeTeste(
    2,
    "Testar cadastro",
    "Ver se o usuário consegue cadastrar",
    false
);

// console.log(descrever(casoDeTeste1));

// const casoAutomatizado = marcarAutomatizado(casoDeTeste1);
// console.log(casoAutomatizado.automatizado)

// console.log(descrever(casoDeTeste2));

// erro 
const casoDeTesteErro = criarCasoDeTeste(
    "2",
    "Testar cadastro",
    "Ver se o usuário consegue cadastrar",
    false
);

console.log(descrever(casoDeTesteErro));
