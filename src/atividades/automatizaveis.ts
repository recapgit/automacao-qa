import PromptSync from "prompt-sync";

const prompt = PromptSync()

let automatizaveis:number = 0
let naoAutomatizaveis:number = 0

for (let i = 1; i <= 5; i++) {
    const cenario:string = prompt(`Digite o ${i}º cenário: `);
    const resposta: string = prompt(`Automatizável? s/n: `)

    if (resposta.toLowerCase() === "s" || resposta.toLowerCase() === "sim") {
        console.log(`${cenario} -> automatizar`)
        automatizaveis++
    }
    else if (resposta.toLowerCase() === "não"|| resposta.toLowerCase() === "n"||resposta.toLowerCase() === "nao"){
        console.log(`${cenario} -> não automatizar`)
        naoAutomatizaveis++
    }
    else{
        console.log("erro")
    }
}
console.log(`total automatizaveis: ${automatizaveis}`)
console.log(`total nao automatizaveis: ${naoAutomatizaveis}`)