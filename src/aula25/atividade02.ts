const nomeDoTeste: string = "login com sucesso";
const tentativas: number = 3;
const passou: boolean = true;

// O TypeScript infere o tipo quando o valor é óbvio
// const ambiente = "homologacao"; // string
// let contador = 0;               // number

console.log(typeof nomeDoTeste); // string
console.log(typeof tentativas);  // number
console.log(typeof passou);      // boolean