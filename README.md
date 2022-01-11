# mixed-messages
Generate random messages that are entertaining. A learning project to practice and grow my javascript skills.

# Brainstorming
I want to make sentences that hopefully are gramatically correct, and make sense. My first thought is to use mad libs... in that case I'd want to get lits of nouns, verbs, adjectives, and adverbs. Turns out there are note that many pre-made lists out therE. But I found at least one after some digging here: https://www.studentandwriter.com/2018/02/09/funny-mad-libs-word-lists-adjectives-nouns-and-verbs-2/

## Sentence Structure
A sentence should follow these rules, adapted from [here](https://www.studentandwriter.com/2018/02/09/funny-mad-libs-word-lists-adjectives-nouns-and-verbs-2/):
1. Begin with a captital letter
2. End with punctuation 
3. Contain a subject
4. Contain a verb or verb phrase 
5. Follow subject + verb + object word order

## Code structure
* Files with words per category (noun, verb, etc)
* Sentence as an object, produce objects with object factory
* Sentence object will take in word lists and generate sentences. Might be good to add probabilities to how often noun/verb/adverbs come up
* Create sentences by building:
    * "noun phrases" : determining words + adjetive + noun. e.g., "Your fat cat"
    * "verb phrases" : adverb + verb, e.g. "mostly sleeps"
    * prepositions : words indicating postion. e.g., "Your fat cat mostly sleeps **in**"
    * location : could be specific, or non-specific, e.g.,  "Your fat cat mostly sleeps in the sun."