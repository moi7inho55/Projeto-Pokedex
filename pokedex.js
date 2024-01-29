// pokedex.js
// Adicione ao pokedex.js

async function searchPokemon() {
  const searchInput = document.getElementById('searchInput');
  const searchTerm = searchInput.value.toLowerCase();

  // Limpa a Pokédex antes de exibir os resultados da pesquisa
  document.getElementById('pokedex').innerHTML = '';

  const pokemonList = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  for (const pokemon of pokemonList.results) {
    const pokemonData = await fetchData(pokemon.url);

    // Verifica se o termo de pesquisa corresponde ao nome do Pokémon
    if (pokemonData.name().includes(searchTerm)) {
      const pokemonCard = document.createElement('div');
      pokemonCard.classList.add('pokemon');

      const pokemonImage = document.createElement('img');
      pokemonImage.src = pokemonData.sprites.front_default;
      pokemonImage.alt = pokemonData.name;

      const pokemonName = document.createElement('p');
      pokemonName.textContent = pokemonData.name;

      pokemonCard.appendChild(pokemonImage);
      pokemonCard.appendChild(pokemonName);

      document.getElementById('pokedex').appendChild(pokemonCard);
    }
  }
}
async function fetchData(url) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

async function displayPokemon() {
  const pokedexContainer = document.getElementById('pokedex');
  const pokemonList = await fetchData('https://pokeapi.co/api/v2/pokemon?limit=151');

  for (const pokemon of pokemonList.results) {
    const pokemonData = await fetchData(pokemon.url);
    const pokemonCard = document.createElement('div');
    pokemonCard.classList.add('pokemon');

    const pokemonImage = document.createElement('img');
    pokemonImage.src = pokemonData.sprites.front_default;
    pokemonImage.alt = pokemonData.name;

    const pokemonName = document.createElement('p');
    pokemonName.textContent = pokemonData.name;

    pokemonCard.appendChild(pokemonImage);
    pokemonCard.appendChild(pokemonName);

    pokedexContainer.appendChild(pokemonCard);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  displayPokemon();
});
