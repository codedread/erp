# Ephemeral Random Phrases… ERPs?

A UUID has 122-bits that make it cryptographically "unique enough". But unfortunately it is
completely unpronounceable and impossible to remember.

Some applications may just want a human-readable, pronounceable identifier for an ephemeral resource
(like a gaming session, a set of sharable files, etc).

`getERP()` returns a random phrase picked from a large list of words between 3-8 characters long,
none of which have homophones. This will allow the phrase to easily be said verbally to a person
such that they might be able to remember it, but also likely to be unique. It is up to the client
to ensure it is unique, if that is important.

# Code

```javascript
  import { getERP } from '@codedread/erp';

  getERP(4); // e.g. "quiz-anvil-zany-such"
```

# More Info

## The Word List

  * Words are 3-8 characters long.
  * Words are common and spellable by most people.
  * Words cannot be easily mistaken for another word when spoken aloud (monophones).

## The Phrase

  * Words are separated by hypens (-).
  * Duplicate words may be present.
  * The client can choose how many words to include in the phrase.

## Examples Phrases
  * Length 1 has 640 unique phrases (~9 bits). Example: ran
  * Length 2 has 409k unique phrases (~18 bits). Example: purse-advice
  * Length 3 has 262M unique phrases (~27 bits). Example: chest-tackle-bubble
  * Length 4 has 167B unique phrases (~37 bits). Example: zoom-trick-form-fret
  * Length 5 has 107T unique phrases (~46 bits). Example: action-sin-hero-shoulder-cape
