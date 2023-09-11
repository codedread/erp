# Ephemeral Random Phrases… ERPs?

A UUID has 122-bits that make it cryptographically "unique enough". But unfortunately it is
completely unpronounceable and impossible to remember. Actually these are features of a UUID
so that it can't be guessed...

... but how far could we get generating random phrases of English words?

The goal is random phrase picked from a large list of english words between 3-8 characters long,
none of which have homonyms. This will allow the phrase to easily be said verbally to a person
such that they might be able to remember it, but also extremely likely to be unique.

## The Word List

  * 3-8 characters long for now
  * word cannot be easily mistaken for another word when spoken out loud
  * word should be common and spellable by most English-speaking people
  * should plurals be allowed?

## The Phrase

  * For now, it is unclear how long the phrase needs to be to match 128-bits of randomness.
    But I think an ideal spot is between 3 and 5 words long.
  * Duplicate words should be allowed.
