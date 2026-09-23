import { expect, test } from 'vitest'

interface User {
    nome: string;
    idade: number;
}

function createUser(nome: string, idade: number): User {
    return {nome, idade}
}

test("Criar um usuário com nome e idade.", () => {
    const user = createUser("Maria", 25);
    expect(user).toEqual({nome: "Maria", idade: 25})
    expect(user.nome).toBe("Maria")
})