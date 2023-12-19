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

  * For now, it is unclear how long the word list and phrase needs to be to match 122-bits
    of randomness, but I think an ideal spot is between 3 and 5 words long.
  * Duplicate words should be allowed.

  * Examples:
    * For a phrase of length 1, there are 380 unique phrases. (~8 bits). Example phrase: program
    * For a phrase of length 2, there are 144k unique phrases. (~17 bits). Example phrase: magic-ulcer
    * For a phrase of length 3, there are 54.87M unique phrases. (~25 bits). Example phrase: even-ankle-scary
    * For a phrase of length 4, there are 20.85B unique phrases. (~34 bits). Example phrase: frigid-earth-order-book
    * For a phrase of length 5, there are 7.92T unique phrases. (~42 bits). Example phrase: villain-cowl-scale-drape-house
    * For a phrase of length 6, there are 3.01Qa unique phrases. (~51 bits). Example phrase: tower-daft-drink-toast-auction-egg
    * For a phrase of length 7, there are 1.14Qi unique phrases. (~59 bits). Example phrase: power-soak-ogre-nostril-pill-soak-flank
