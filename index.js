const words = require("./words.json")

// -`allWords` logs all the words.
// - `firstTenWords` logs the first ten words.
// - `nextTenWords` logs the next 10 words.
// - `firstXWords` logs from 0 to x words.
// - `subsetOfWords` logs from x to y words.
// - `sortWords` logs all the words, sorted alphabetically.

function allWords(words) {
   return console.log(words)
}

function _firstTenWords(words) {
    for(i = 0; i < 10; i++) {
         console.log(words[i])
    }
}

//returns undefined for some reason after 10 words
function nextTenWords(words) {
    for(i = 10; i < 20; i++) {
        console.log(words[i])
    }
}

//returns undefined for the same reason after 10 words
function firstXWords(words, x) {
    for (i = 0; i < x; i++) {
        console.log(words[i])
    }
}

function subsetOfWords(words, x, y) {
    for (i = x; i < y; i++) {
        console.log(words[i])
    }
}

function sortWords(words) {
    return words.sort()
}

function wordsWithQ(words) {
   return words.filter(word => word.includes("q"))
}

function findWordsWithLetter(words) {
    return words.filter(word => word.includes(process.argv[2]))
}
console.log(findWordsWithLetter(words, process.argv[2]))
