const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecords = 151
const limit = 10
let offset = 0;


function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map((pokemon) => `
            <li class="pokemon ${pokemon.type}">
                        <span class="number">#${pokemon.number}</span>
                        <span class="name">${pokemon.name}</span>
        
                        <div class="detail">
                            <ol class="types">
                                ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                            </ol>
                            <img src="${pokemon.photo}" alt="${pokemon.name}">
                        </div>
                        
                    </li>
        `).join('')
        pokemonList.innerHTML += newHtml;
        
    }) //esse código está substituindo o 'for' de baixo que está como comentário. É um 'for' reduzido.
}

loadPokemonItens(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
    const qtdRecordNextPage = offset + limit

    if (qtdRecordNextPage >= maxRecords) {
        const newLimit = maxRecords - offset
        loadPokemonItens(offset, newLimit)
        
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    } else {
        loadPokemonItens(offset, limit)
    }
})

/*function loadPokemonDetails(pokemon) {
    // Preencher o modal com os detalhes do Pokémon
    const modalTitle = document.getElementById('modalTitle');
    const modalBody = document.getElementById('modalBody');

    modalTitle.textContent = `${pokemon.number} - ${pokemon.name}`;
    modalBody.innerHTML = `
        <p><strong>Types:</strong> ${pokemon.types.join(', ')}</p>
        <p><img src="${pokemon.photo}" alt="${pokemon.name}"></p>
        <!-- Adicione mais informações do Pokémon conforme necessário -->
    `;

    // Abrir o modal
    const modal = document.getElementById('pokemonModal');
    modal.style.display = 'block';
}

function closePokemonModal() {
    // Fechar o modal
    const modal = document.getElementById('pokemonModal');
    modal.style.display = 'none';
}

document.querySelectorAll('.pokemon').forEach((pokemonElement) => {
    pokemonElement.addEventListener('click', () => {
        const pokemon = pokemon.find(p => p.number === parseInt(pokemonElement.dataset.pokemonNumber, 10));
        // Chama a função para exibir os detalhes do Pokémon
        loadPokemonDetails(pokemon);
    });
});*/

document.querySelector('#button').addEventListener('click', loadPokemonDetails)

    
   
    //const listItens = []


    //for (let i = 0; i < pokemons.length; i++) {
    //   const pokemon = pokemons[i];
    //    listItens.push(convertPokemonToHtml(pokemon))
    //}

    //console.log(listItens)



   // .catch((error) => console.error(error))        //retorna se der erro
   // .finally(() => console.log('Requisição concluída!'))
