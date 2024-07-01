// Selecionando a div pokeContainer
const pokeContainer = document.getElementById('pokeContainer');
const pokemonCount = 100;
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const mainTypes = Object.keys(colors); // retorna o objeto da lista => saida esperada [fire, grass, eletric].

// Função que percorre o objeto do fetch
const fetchPokemon = async () =>{
    for(let i = 1; i <= pokemonCount; i++){
        await getPokemons(i)
    }
}

// Buscando os pokemon pelo fetch
const getPokemons = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    // console.log(data.name)
    createPokemonCard(data);
}

// Criando os cards dinâmicamente
const createPokemonCard =  (poke) =>{
    const card = document.createElement('div');
    card.classList.add('pokemon');

    // inserindo os elementos do card 

    const name = poke.name[0] + poke.name.slice(1);
    const id = poke.id.toString(); // .padStart(3,0) -- Serve para que?

    // Criar uma constante com o valor -- poke.types.map(type => type.type.name) para que serve?

    const type = poke.types[0].type.name; // trocar valor para -- mainTypes.find(type => pokeTypes.indexOf(type) > -1) para que serve?

    //criar constante color = colors (nome da array)[types];
    // card.style.backgroundColor = color;

    // criando o card

    const pokemonInnerhtml = `
    <div class="imagemContainer">
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${poke.id}.png" alt="Pokemom Imagem">
            </div>
            <div class="info">
                <span class="number">#${id}</span>
                <h3 class="name">${name}</h3>
                <small class="type">Tipo: <span>${type}</span></small>
            </div>
    `
    card.innerHTML = pokemonInnerhtml;
    pokeContainer.appendChild(card);
}

fetchPokemon();