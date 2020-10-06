export function getCapitalized(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function getIdFromUrl(url) {
  return url.split("/")[6];
}

export function getAnimatedShinyImageFromId(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/shiny/${id}.gif`;
}