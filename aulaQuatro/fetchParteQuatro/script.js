// Criando a função fetch do botao pokemonID

// chamando elementos do dom
const pokemonNome = document.getElementById('pokemonNome')
const pokemonTipo = document.getElementById('pokemonTipo')
const imagemEle = document.getElementById('pokemonSprite')

const fetchPokemon = async () =>{
    try {
        // pegando valor
        const pokemonID = document.getElementById('pokemonID').value.toLowerCase()

        // tratando input branco
        if(pokemonID == ''){
            alert('Digite um valor válido');
            throw new Error('ID inválido');
        }

        // criando o fetch e trantando a promise e erros
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)

        if(!resp.ok){
            // trantando erro
            throw new Error('Pokemon não encontrado')
        }else{
            // tratando promise
            const data = await resp.json();
            console.log(data)

            // criando o endereço da img
            const pokemonSprite = data.sprites.front_default

            // inserindo dados no html com innerHTML
            pokemonNome.innerHTML = data.name;
            pokemonTipo.innerHTML = data.types[0].type.name;

            // inserindo imagem
            imagemEle.src = pokemonSprite;
            imagemEle.style.display = 'block'

        }
    } catch (error) {
        // tratando erro e mostrando ao usuario
        pokemonNome.innerHTML = 'Pokemon não encontrado';
        pokemonTipo.innerHTML = "";
        imagemEle.style.display = 'none';
    }
}