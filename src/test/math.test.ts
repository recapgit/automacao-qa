import { expect, test, describe } from 'vitest'

describe("Calcular a raiz quadrada de um numero.", () =>{

    test('Retornar a raiz quadrada de um número perfeito.', () => {
    expect(Math.sqrt(81)).toBe(9)
    expect(Math.sqrt(9)).toBe(3)
    })

    
    test('Retornar NAN se o número for negativo.', () => {
        expect(Math.sqrt(-1)).toBeNaN()
    })

    test('Retornar 0 se for passado um 0.', () => {
        expect(Math.sqrt(0)).toBe(0)
    })
}) 