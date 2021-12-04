const RomanNumerals = {
    symbolsWeight: {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    },
    toRoman(number) {
        let digits = String(+number).split(""),
            key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
                "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
                "","I","II","III","IV","V","VI","VII","VIII","IX"],
            roman = "",
            i = 3;
        while (i--)
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;

        return Array(+digits.join("") + 1).join("M") + roman;
    },
    fromRoman(line){
        let result = 0;

        for (let i = 0, len = line.length; i < len; i++) {
            let symbol = line[i];
            let prevSymbol = line[i - 1];

            if (prevSymbol && this.symbolsWeight[prevSymbol] < this.symbolsWeight[symbol]) {
                result += (this.symbolsWeight[symbol] - 2 * this.symbolsWeight[prevSymbol]);
            } else {
                result += this.symbolsWeight[symbol];
            }
        }

        return result;
    }
};

console.log(RomanNumerals.toRoman(1000), 'M');
console.log(RomanNumerals.toRoman(4), 'IV');
console.log(RomanNumerals.toRoman(1), 'I');
console.log(RomanNumerals.toRoman(1990), 'MCMXC');
console.log(RomanNumerals.toRoman(2008), 'MMVIII');
console.log(RomanNumerals.toRoman(195));

console.log(RomanNumerals.fromRoman('XXI'), 21);
console.log(RomanNumerals.fromRoman('I'), 1);
console.log(RomanNumerals.fromRoman('IV'), 4);
console.log(RomanNumerals.fromRoman('MMVIII'), 2008);
console.log(RomanNumerals.fromRoman('MDCLXVI'), 1666);
console.log(RomanNumerals.fromRoman('CXCV'));