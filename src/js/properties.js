export default function sortingCharacters(characters) {
  return characters.sort((a, b) => b.health - a.health);
}