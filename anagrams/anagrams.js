const calculateLettersCount = (word) => {
    const result = {};

    for(let i = 0; i < word.length; i++) {
        let letter = word[i];

        result[letter] = result[letter] ? result[letter] + 1 : 1;
    }

    return result;
};

function anagrams(word, words) {
    const lettersCount = calculateLettersCount(word);
    const result = [];

    for(let i = 0; i < words.length; i++) {
        if (words[i].length !== word.length) {
            continue;
        }

        const wordLettersCount = calculateLettersCount(words[i]);
        let isAnagram = true;

        for(let k in lettersCount) {
            if (lettersCount[k] !== wordLettersCount[k]) {
                isAnagram = false;
                break;
            }
        }

        if (isAnagram) {
            result.push(words[i]);
        }
    }

    return result;
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])); //['aabb', 'bbaa']
console.log(anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])); // ['carer', 'racer']
console.log(anagrams('laser', ['lazing', 'lazy',  'lacer'])); // []