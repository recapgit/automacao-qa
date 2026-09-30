import { validarSenha } from '../atividade-pratica/validarSenha.js'
import { describe, expect, test } from 'vitest'

describe("Caracteres especiais na senha", () => {

  test('Diferentes caracteres especiais', () => {
    expect(validarSenha('12AB&:@')).toBeFalsy()
})

  test('Apenas caracteres especiais', () => {
    expect(validarSenha('@#$@#$>>')).toBeFalsy()
})
})