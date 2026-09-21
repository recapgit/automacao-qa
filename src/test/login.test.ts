import { log } from 'node:console';
import { PassThrough } from 'node:stream';
import { expect, test, describe } from 'vitest'

function login(username: string, password: string): boolean{
    return username === 'admin' && password === 'admin'
}

describe("Verificar login credenciais corretas", () => {

  test('Login com credenciais corretas', () => {
    const tentativaLogin = login("admin", 'admin')
    expect(tentativaLogin).toBe(true)
})
})

describe("Negar login com credenciais inválidas", () => {

test('Negar login com credenciais inválidas', () => {
    const tentativaLogin = login('wenomechainsama', 'tumajarbisaun')
    expect(tentativaLogin).toBe(false)
})

test('Negar login com senha vazia', () => {
    const tentativaLogin = login('admin', '')
    expect(tentativaLogin).toBe(false)
})

test('Negar login com usuario vazio', () => {
    const tentativaLogin = login('', 'perceba')
    expect(tentativaLogin).toBe(false)
})
})
