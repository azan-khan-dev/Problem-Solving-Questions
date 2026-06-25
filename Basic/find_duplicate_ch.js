function findDuplicates(str) {
    let charCount = {};
    let duplicates = [];

    for (let i = 0; i < str.length; i++) {
        let ch = str[i];
        charCount[ch] = (charCount[ch] || 0) + 1;
    }

    for (let ch in charCount) {
        if (charCount[ch] > 1) {
            duplicates.push(ch);
        }
    }
    return duplicates;
}

console.log(findDuplicates("Backend engineer"));
