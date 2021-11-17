function parseInt(string) {
    let result = 0;
    const numberDimensions = {
        "million": 1000000,
        "thousand": 1000,
        "hundred": 100
    };
    let words = string.split(' ');
    let sum = 0;

    for(let i = 0, len = words.length; i < len; i++) {
        const word = words[i];
        const multiplex = numberDimensions[word];

        if (!multiplex) {
            sum += parseSimpleNumber(word);
        } else {
            if (multiplex !== 100) {
                result += (sum * multiplex);
                sum = 0;
            } else {
                sum = sum * 100;
            }
        }
    }

    result += sum;

    return result;
}

function parseSimpleNumber(string) {
    const numberValues = {
        "zero": 0,
        "one": 1,
        "two": 2,
        "three": 3,
        "four": 4,
        "five": 5,
        "six": 6,
        "seven": 7,
        "eight": 8,
        "nine": 9,
        "ten": 10,
        "eleven": 11,
        "twelve": 12,
        "thirteen": 13,
        "fourteen": 14,
        "fifteen": 15,
        "sixteen": 16,
        "seventeen": 17,
        "eighteen": 18,
        "nineteen": 19,
        "twenty": 20
    };
    const tenNumbersValues = {
        "twenty": 20,
        "thirty": 30,
        "forty": 40,
        "fifty": 50,
        "sixty": 60,
        "seventy": 70,
        "eighty": 80,
        "ninety": 90,
    };

    if (numberValues[string]) {
        return numberValues[string];
    }

    const parts = string.split('-');
    let result = 0;

    for (let i = 0, len = parts.length; i < len; i++) {
        result += numberValues[parts[i]] || 0;
        result += tenNumbersValues[parts[i]] || 0;
    }

    return result;
}

console.log(parseInt("zero"));
console.log(parseInt("one"));
console.log(parseInt("seven hundred eighty-three thousand nine hundred nineteen"));
console.log(parseInt("twenty"));
console.log(parseInt("two hundred forty-six"));
console.log(parseInt("five thousand two hundred forty-six"));
console.log(parseInt("one million two hundred forty-six"));
console.log(parseInt("two hundred fifty-six thousand two hundred fifty-six"));