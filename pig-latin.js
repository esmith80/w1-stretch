const translatePigLatin = function(sentenceArray) {
  let translation = "";
  for (let word of sentenceArray) {
    word = word.replace(/,/g, '');
    word = word.replace(/\./g, '');
    word = word.replace(/!/g, '');
    if (word.length === 1) {
      word = 'ay' + word;
    } else {
      word = word.substring(1, word.length) + word.charAt(0) + "ay";
    }
    translation += " " + word;
  }
  return translation;
};

let sentence = process.argv.slice(2, process.argv.length);

// TEST CASES assumes no numbers are in the arguments passed in
console.log('Have a nice day!!!!: ', translatePigLatin(["Have", "a", "nice", "day!!!!"]));

console.log('The command line arguments passed in: ', translatePigLatin(sentence));
console.log('Hel,lo, world...', translatePigLatin(["Hel,lo,", "world..."]));

console.log('Empty String: ', translatePigLatin([""]));
console.log('Empty Array: ', translatePigLatin([]));
