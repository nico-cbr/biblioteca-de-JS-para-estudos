// pegando elementos do dom

const nomePokemon = document.getElementById('nomePoke');
const tipoPokemon = document.getElementById('tipoPoke');
const imagemEle = document.getElementById('pokemonSprite');

// Função para fazer o fetch e exibir as informações
const fetchPokemon = async () =>{
  
      try {
        // pegando o valor que é colocado no input
        const pokemonID = document.getElementById('pegaPokemon').value;

        // Fazendo o fetch (fazendo a promise) e buscando a informação
        const resp =  await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);

        // tratamento de erro
            if(!resp.ok){
                throw new Error('Pokemon não encontrado');
            } else {
                // tratando a promise feita
                const data = await resp.json();
               // console.log(data.name);
                //console.log(data.types[0].type.name)
                
                // colocando valores aos elementos do dom e manipulando estilo do campo de imagem
                nomePokemon.innerHTML = data.name;
                tipoPokemon.innerHTML = data.types[0].type.name;
                imagemEle.src = data.sprites.front_default;
                imagemEle.style.display = 'block'
            }
    } catch (error) {
        // manipulando o que será exibido caso de errado
        nomePokemon.innerHTML = "Pokemon não encontrado";
         imagemEle.style.display = 'none'
         tipoPokemon.innerHTML = "";
    }
}