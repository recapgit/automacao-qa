const testes = ["login", "carrinho", "checkout"];

// for clássico: você controla o índice
for (let i = 0; i < testes.length; i++) {
    console.log(`${i + 1}. ${testes[i]}`);
}

// for...of: percorre os valores direto, mais legível
for (const teste of testes) {
    console.log(`executando ${teste}`);
}

// while: repete enquanto a condição for verdadeira
let tentativas = 0;
while (tentativas < 3) {
    tentativas++;
}
console.log(`tentativas: ${tentativas}`); // tentativas: 3
