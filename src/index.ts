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

// TODO: To properly encode a trie in minimal memory, should use a Uint8Array... Note
// that because of our unique problem space, the max # of children for a node is 26
// (so 5-bit keys in the children map), so a single 32-bit value can store which children
// a given node has as well as whether it is an ending character.
//
// Optimized node cost:
// - 4 bytes for flags (is-last + which children)
// - 4 bytes for parent (32-bit pointer)
// - 4 bytes for _each_ child (32-bit pointer)
interface Node {
  children?: Map<string, Node>;
  isLastChar: boolean;
  parent: Node;
}

let root: Node = {isLastChar: false, parent: null};
let leaves: Node[] = [];
let numNodes = 1;

/** Returns the number of bytes added to memory for this word. */
function addWordToNode(word: string, node: Node): number {
  const ch = word[0];
  const isLastChar = word.length === 1;
  let memBytes = 0;

  if (!node.children) {
    node.children = new Map<string, Node>();
  }
  if (!node.children.has(ch)) {
    node.children.set(ch, {parent: node, isLastChar});
    numNodes++;
    memBytes += 12; // Parent pointer + Flags + Child-for-parent pointer
  }
  let chNode = node.children.get(ch);
  if (!isLastChar) {
    memBytes += addWordToNode(word.slice(1), chNode);
  } else {
    chNode.isLastChar = true;
    leaves.push(chNode);
  }
  return memBytes;
}

function go() {
  const buffer = fs.readFileSync('dict/words.en.json');
  const words: string[] = JSON.parse(buffer.toString());

  // Goofy memory calculations:
  if (!false) {
    let wordListMemInBytes = 0;
    let trieMemInBytes = 0;
    for (const w of words) {
      wordListMemInBytes += w.length + 1;
      trieMemInBytes += addWordToNode(w, root);
    }
    console.log(`\nFlat word list takes up ${wordListMemInBytes} bytes.`);
    console.log(`Trie has ${numNodes} nodes and would take up ${trieMemInBytes} bytes.\n`);
  }

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
