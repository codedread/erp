import words from '../dict/words.en.json' with { type: 'json' };
import path from 'path';
import url from 'url';

/**
 * Returns an Ephemeral Random Phrase with numberOfWords in it. This method has
 * no memory of previous calls. It is up to the client to ensure uniqueness if
 * that is important.
 */
export function getERP(numberOfWords: number = 3): string {
  if (numberOfWords <= 0 || numberOfWords > 100) {
    throw new Error('Invalid number of words');
  }

  let phrase: string[] = [];
  for (let i = 0; i < numberOfWords; ++i) {
    phrase.push(words[getRandomInt(words.length)]);
  }
  return phrase.join('-');
}

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
    return `${Math.floor(n / 1_000_000)}M`;
  }
  // Billions (B)
  else if (n < 1_000_000_000_000) {
    return `${Math.floor(n / 1_000_000_000)}B`;
  }
  // Trillions (T)
  else if (n < 1_000_000_000_000_000) {
    return `${Math.floor(n / 1_000_000_000_000)}T`;
  }
  // Quadrillions (Qa)
  else if (n < 1_000_000_000_000_000_000) {
    return `${Math.floor(n / 1_000_000_000_000_000)}Qa`;
  }
  // Quintillions (Qi)
  else if (n < 1_000_000_000_000_000_000_000) {
    return `${Math.floor(n / 1_000_000_000_000_000_000)}Qi`;
  }
  return `${n}`;
}


function info() {
  const totalWords = words.length;
  const equivalentBits = Math.log2(totalWords);
  let numWordsInPhrase = 1;
  while (numWordsInPhrase <= 5) {
    const numUniquePhrases = getAbbreviatedNum(totalWords ** numWordsInPhrase);
    const numBitsForPhrase = Math.floor(equivalentBits * numWordsInPhrase);
    const phrase = getERP(numWordsInPhrase);

    console.log(`  * Length ${numWordsInPhrase} has ${numUniquePhrases} unique phrases `
       + `(~${numBitsForPhrase} bits). Example: ${phrase}`);
    ++numWordsInPhrase;
  }
}

// If we are running this module locally, print out information.
const currentFilePath = url.fileURLToPath(import.meta.url);
const mainFilePath = path.resolve(process.argv[1]);
if (currentFilePath === mainFilePath) {
   info();
}
