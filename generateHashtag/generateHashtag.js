function generateHashtag (line) {
    line = line.trim().replace(/\s{2,}/g, ' ');

    if (line.length < 1 || line.length > 139) {
        return false;
    }

    return "#" + line.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
}

console.log(generateHashtag('Codewars   is   nice'));
console.log(generateHashtag("a".repeat(139)));
console.log(generateHashtag("Do We have A Hashtag"));
console.log(generateHashtag(''));