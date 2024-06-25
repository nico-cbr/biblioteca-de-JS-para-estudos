// Fetch Teste 01 - Estudando promises

// const req = fetch('https://pokeapi.co/api/v2/pokemon/pikachu');
// console.log(req)

// Fetch Teste 02 - Resolvendo a promise

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(resp => console.log(resp))
//     .catch(error => console.log(error));

// Fetch Teste 03 - Convertendo a resposta em JSON

// fetch('https://pokeapi.co/api/v2/pokemon/pikachu')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Fetch Teste 04 - Acessando informações via ID

// fetch('https://pokeapi.co/api/v2/pokemon/1')
//     .then(resp => resp.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));

// Fetch Teste 05 - Utilizando o Try Catch

async function fetchPokemon(){
    try {
        const resp =  await fetch('https://pokeapi.co/api/v2/pokemon/1');
            if(!resp.ok){
                throw new Error('Pokemon não encontrado');
            } else {
                const data = await resp.json();
                console.log(data);
            }
    } catch (error) {
        console.log(error);
    }
}

fetchPokemon();