interface Postagem { 
    id: number
    title: string
    body: string
}

async function buscarPostagem(id:number): Promise<Postagem> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    )

    console.log(`Status: ${response.status}`);

    const responseGET = await response.json() as Promise<Postagem>;
    return responseGET
}

async function criarPostagem(): Promise<Postagem> {
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: "1st POST",
                body: "Description",
                userID: 1
            })    
        });
    const responsePOST = await response.json() as Promise<Postagem>;                                             
    console.log(`Status: ${response.status}`);
    return responsePOST;
    
}

// const post = await criarPostagem()
// console.log(post);

// const get = await buscarPostagem(1);
// console.log(get);
// console.log(get.title);

async function atualizarPostagemCompleta(id:number): Promise<Postagem> {
    const sentBody = {
        title: "1st update",
        body: "Here's a new description",
        userID: 22
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sentBody)    
        });

        
    const responsePUT = await response.json() as Promise<Postagem>;                                             
    
    console.log(`Status: ${response.status}`);
    console.log('Corpo Enviado: \n', sentBody);

    console.log("Corpo recebido: ")
    
    return responsePUT;
}

// const put = await atualizarPostagemCompleta(2);
// console.log(put);


async function deletarPostagem(id:number): Promise<void>{
    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
        method: 'DELETE'
    })

    console.log(`Status: ${response.status}`);
}

// await deletarPostagem(100)

async function atualizarCampo(id:number): Promise<Postagem> {
    const sentBody = {
        title: "Patching title"
    }

    const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(sentBody)    
        });

    console.log(`Status: ${response.status}`);
    console.log('Corpo Enviado: \n', sentBody);
    console.log("Corpo recebido: ")

    const responsePatch = await response.json() as Promise<Postagem>;
    return responsePatch
}

const patch = await atualizarCampo(60)
console.log(patch);
console.log(patch.title);
