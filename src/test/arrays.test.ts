import { expect, test, describe } from 'vitest'

interface ExecucaoTeste {
id: number;
nome: string;
status: 'aprovado' | 'reprovado';
duracao: number;
}

const execucoes: ExecucaoTeste[] = [
{ id: 1, nome: 'Login', status: 'aprovado', duracao: 100 },
{ id: 2, nome: 'Cadastro', status: 'reprovado', duracao: 200 },
{ id: 3, nome: 'Pesquisa', status: 'aprovado', duracao: 150 },
{ id: 4, nome: 'Calcular o frete', status: 'aprovado', duracao: 250 },
{ id: 5, nome: 'Realizar compra', status: 'reprovado', duracao: 300 }
];

console.log(execucoes.map(execucao => execucao.nome))
console.log(execucoes.filter(execucao => execucao.status === 'aprovado'))
console.log(execucoes.reduce((total, execucao) => total + execucao.duracao, 0));

async function buscarExecucaoPorID(id: number): Promise<ExecucaoTeste> {
await new Promise(resolve => setTimeout(resolve, 100));

for (const execucao of execucoes) {
        if (execucao.id === id) {
            return execucao;
        }
    }
    throw new Error('Execução não encontrada');
}

describe('Buscar execução pelo ID', () => {

test('Retornar execução aprovada', async () => {
    const resultado = await buscarExecucaoPorID(1);
    expect(resultado.status).toBe('aprovado');
});

test('Retornar execução reprovada', async () => {
    const resultado = await buscarExecucaoPorID(2);
    expect(resultado.status).toBe('reprovado');
});

test('Retornar o ultimo teste do array', async () => {
    const resultado = await buscarExecucaoPorID(5);
    expect(resultado).toEqual({
        id: 5,
        nome: 'Realizar compra',
        status: 'reprovado',
        duracao: 300
    });
});

test('Lançar erro se o ID não existe', async () => {
    await expect(buscarExecucaoPorID(10)).rejects.toThrow('Execução não encontrada');
});

test('Lançar erro se o ID é zero', async () => {
    await expect(buscarExecucaoPorID(0)).rejects.toThrow('Execução não encontrada');
});

test('Lançar erro se o ID é negativo', async () => {
    await expect(buscarExecucaoPorID(-1)).rejects.toThrow('Execução não encontrada');
});
});
