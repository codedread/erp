# Ephemeral Random Phrases… ERPs?

A UUID has 122-bits that make it cryptographically "unique enough". But unfortunately it is
completely unpronounceable and impossible to remember. Actually these are features of a UUID
so that it can't be guessed...

... but how far could we get generating random phrases of English words?

The goal is a random phrase picked from a large list of english words between 3-8 characters long,
none of which have homonyms. This will allow the phrase to easily be said verbally to a person
such that they might be able to remember it, but also extremely likely to be unique.

## The Word List

  * 3-8 characters long for now
  * word cannot be easily mistaken for another word when spoken out loud
  * word should be common and spellable by most English-speaking people
  * should plurals be allowed?

## The Phrase

  * For now, it is unclear how long the word list and phrase needs to be if we want 122-bits
    of randomness, but I think an ideal spot for memory is between 3 and 5 words long.
  * Duplicate words are allowed.

  * Results:
    * For a phrase of length 1, there are 452 unique phrases. (~8 bits). Example phrase: fudge
    * For a phrase of length 2, there are 204k unique phrases. (~17 bits). Example phrase: job-knife
    * For a phrase of length 3, there are 92.34M unique phrases. (~26 bits). Example phrase: over-cowl-job
    * For a phrase of length 4, there are 41.74B unique phrases. (~35 bits). Example phrase: even-elf-fluster-sour
    * For a phrase of length 5, there are 18.86T unique phrases. (~44 bits). Example phrase: blender-own-chin-trance-castle
    * For a phrase of length 6, there are 8.52Qa unique phrases. (~52 bits). Example phrase: fog-down-spend-butter-junk-lab
