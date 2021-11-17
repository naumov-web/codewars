function topThreeWords(text) {
    text = text.toLowerCase().replace(/[`~!@#$%^&*()_|+-=?;:",.<>\{\}\[\]\\\/]/gi, "").replace(/\s+/g, ' ').trim();
    const words = text.split(' ');
    const wordsCount = {};
    const wordsCountArray = [];

    for(let i = 0, len = words.length; i < len; i++) {
        const word = words[i];

        if (word.length === 0 || !(/[a-zA-Z]/).test(word)) {
            continue;
        }

        if (!wordsCount[word]) {
            wordsCount[word] = {
                word,
                count: 1
            };
        } else {
            wordsCount[word].count++;
        }
    }

    for (let k in wordsCount) {
        wordsCountArray.push(wordsCount[k]);
    }

    wordsCountArray.sort((a, b) => {
        return a.count < b.count ? 1 : -1;
    });

    return wordsCountArray.slice(0, 3).map(item => item.word);
}

console.log(topThreeWords('a a a  b  c c  d d d d  e e e e e'));
console.log(topThreeWords('  ...  '));
console.log(topThreeWords('  \'  '));