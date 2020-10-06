import {
  getCapitalized,
  getIdFromUrl,
  getAnimatedShinyImageFromId
} from './utils';

export function createHomeMarkup() {
  return `
    <h1>My Pokedex</h1>
    <button id="view">View pokemons</button>
  `;
}

export function createPokemonCardMarkup(pokemon) {
  var pokemonId = getIdFromUrl(pokemon.url);
  var imageUrl = getAnimatedShinyImageFromId(pokemonId);

  return `
    <div class="pokemonCard" id="${pokemonId}">
      <img src="${imageUrl}">
      <h3>${getCapitalized(pokemon.name)}</h3>
    </div>
  `;
}

export function createPokemonsMarkup(pokemons, currentPage) {
  var pokemonList = pokemons
  .map(createPokemonCardMarkup)
  .join("");

  var isFirstPage = currentPage == 0;

  return `
    <h1>My Pokemons</h1>
    ${isFirstPage ? "" : `<button id="previous">Previous</button>`}         
    <button id="next">Next</button>
    <div id="pokemonList">
      ${pokemonList}
    </div>
  `;
}

export function createPokemonMarkup(pokemon) {
  return `
    <h1>${pokemon.name} is ${pokemon.height} tall</h1>
    <button id="back">Back</button>
    <div>
      <img src="${pokemon.sprites.other.dream_world.front_default}">
    </div>
    <div>
      <img src="${pokemon.sprites.front_default}">
    </div>
  `;
}

export function createPokemonsLoadingMarkup() {
  return `
    <h3>Loading pokemons...</h3>
  `;
}

export function createPokemonsErrorMarkup(error) {
  return `
    <h3>Unable to get pokemons</h3>
    <p>${error.message}</p>
    <p>Check your internet connection</p>
  `;
}