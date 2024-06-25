//Realizando o fetch no EndPoint

//percorrendo os 100 primeiros pokemon
const fetchPokemom = async () =>{
    for(let i = 1; i <= 100; i++){
        await pegaPokemon(i)
    }
}

//exibindo os 100 primeiros pokemon
const pegaPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    // console.log(data.name);
    console.log(data.types[0].type.name)
}


fetchPokemom()