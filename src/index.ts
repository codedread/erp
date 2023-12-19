import * as fs from 'fs';

// TODO: Build a trie to store the words?
// TODO: Investigate whether N word phrases should look more like sentences.
//       (this would obv reduce the # of combinations, since only words of
//        certain could fill each slot).

function getRandomInt(max: number): number {
  return Math.floor(Math.random() * max);
}

function getAbbreviatedNum(n: number): string {
  if (n < 10_000) {
    return `${n}`;
  }
  // Thousands (k)
  else if (n < 1_000_000) {
    return `${Math.floor(n / 1_000)}k`;
  }
  // Millions (M)
  else if (n < 1_000_000_000) {
    return `${Math.floor(n / 10_000) / 100}M`;
  }
  // Billions (B)
  else if (n < 1_000_000_000_000) {
    return `${Math.floor(n / 10_000_000) / 100}B`;
  }
  // Trillions (T)
  else if (n < 1_000_000_000_000_000) {
    return `${Math.floor(n / 10_000_000_000) / 100}T`;
  }
  // Quadrillions (Qa)
  else if (n < 1_000_000_000_000_000_000) {
    return `${Math.floor(n / 10_000_000_000_000) / 100}Qa`;
  }
  // Quintillions (Qi)
  else if (n < 1_000_000_000_000_000_000_000) {
    return `${Math.floor(n / 10_000_000_000_000_000) / 100}Qi`;
  }
  return `${n}`;
}

function go() {
  const buffer = fs.readFileSync('words.json');
  const words: string[] = JSON.parse(buffer.toString());

  const totalWords = words.length;
  const equivalentBits = Math.log2(totalWords);
  let numWordsInPhrase = 1;
  while (numWordsInPhrase <= 7) {
    const numUniquePhrases = getAbbreviatedNum(totalWords ** numWordsInPhrase);
    const numBitsForPhrase = Math.floor(equivalentBits * numWordsInPhrase);
    let examplePhraseWords: string[] = [];
    for (let i = 0; i < numWordsInPhrase; ++i) {
      examplePhraseWords.push(words[getRandomInt(totalWords)]);
    }

    console.log(`    * For a phrase of length ${numWordsInPhrase}, there are ${numUniquePhrases} unique phrases. `
       + `(~${numBitsForPhrase} bits). Example phrase: ${examplePhraseWords.join('-')}`);
    ++numWordsInPhrase;
  }
}

go();
