const fs = require('fs');

function reverseWordsAndSortDescending(sentence) {
  const words = sentence.split(' ');

  const reversedAndSortedWords = words.map(word => {
    return word.split('').reverse().join('');
  }).sort((a, b) => b.localeCompare(a));

  return reversedAndSortedWords.join(' ');
}

// Read the input sentence from a file
const inputFile = 'input.txt';
const inputSentence = fs.readFileSync(inputFile, 'utf8');

// Process the sentence
const reversedAndSortedSentence = reverseWordsAndSortDescending(inputSentence);

// Save the result to an output file
const outputFile = 'output.txt';
fs.writeFileSync(outputFile, reversedAndSortedSentence, 'utf8');

console.log(`Result saved to ${outputFile}`);
