export default function toTitleCase(string) {
  const firstCharacter = string.slice(0, 1);
  const restOfString = string.slice(1);
  return firstCharacter.toUpperCase() + restOfString.toLowerCase();
}
