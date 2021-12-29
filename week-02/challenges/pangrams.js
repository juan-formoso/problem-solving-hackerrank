/* 
Problem Description: 
A pangram is a string that contains every letter of the alphabet. Given a sentence determine whether it is a pangram in the English alphabet.
Ignore case. Return either pangram or not pangram as appropriate.

Example:
s = 'The quick brown fox jumped over the lazy dog'
The string contains all letters in the English alphabet, so return pangram. */

function pangrams(s) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const lowerCase = s.toLowerCase().replace(/\s/g, "");
  for (let i = 0; i < alphabet.length; i += 1) {
    if (lowerCase.indexOf(alphabet[i]) === -1) {
      return "not pangram";
    }
  }
  return "pangram";
}
