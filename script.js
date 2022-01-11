// Vanilla javascript to create random sentences

// Load word lists into arrays
const loadWordList = (fileName) => {
    let fs = require('fs');
    let text = String(fs.readFileSync(fileName, 'utf-8'));
    let textByLine = text.split('\r\n') // note the use of Windows EOL
    return textByLine;
};

// Sentence Constructor Factory
const createSetence = (nounPhrase, verbPhrase) => {
    return {
        _nounPhrase: nounPhrase,
        _verbPhrase: verbPhrase,
        get nounPhrase () {return this._nounPhrase},
        set nounPhrase (newNounPhrase) {return this._nounPhrase = newNounPhrase},
        get verbPhrase () {return this._verbPhrase},
        set verbPhrase (newVerbPhrase) {return this._verbPhrase = newVerbPhrase},
        capitalizeFirstLetter (phrase) {
            return phrase[0].toUpperCase() + phrase.slice(1).toLowerCase();
        },
        getSentence () {
            this.nounPhrase = this.capitalizeFirstLetter(this.nounPhrase);
            return this.nounPhrase + ' ' + this.verbPhrase + '.';
        },
    }
};

const generateNounPhrase = (nouns, determiners, adjectives, prepositions, deterProb=0.99, adjProb=0.3, prepProb=0.03) => {
    let nounPhrase = '';
    if (Math.random() <= deterProb) {
        nounPhrase += determiners[Math.floor(Math.random() * determiners.length)] + ' ';
    };
    if (Math.random() <= adjProb) {
        nounPhrase += adjectives[Math.floor(Math.random() * adjectives.length)] + ' ';
    };
    // must have a noun 100% of the time
    nounPhrase += nouns[Math.floor(Math.random() * nouns.length)];
    if (Math.random() <= prepProb) {
        nounPhrase += ' ' + prepositions[Math.floor(Math.random() * prepositions.length)];
    };
    return nounPhrase;
};

const generateVerbPhrase = (verbs, adverbs, advProb=0.75) => {
    let verbPhrase = '';
    if (Math.random() <= advProb) {
        verbPhrase += adverbs[Math.floor(Math.random() * adverbs.length)] + ' ' + verbs[Math.floor(Math.random() * verbs.length)];
    } else {
        verbPhrase += verbs[Math.floor(Math.random() * verbs.length)];
    };
    return verbPhrase;
};

// Load known words into arrays
const determiners =  loadWordList('determiners.txt');
const nouns =  loadWordList('nouns.txt');
const adjectives =  loadWordList('adjectives.txt');
const verbs =  loadWordList('verbs.txt');
const adverbs =  loadWordList('adverbs.txt');
const places =  loadWordList('places.txt');
const prepositions =  loadWordList('prepositions.txt');


for (let i=0 ; i<100; i++) {
    let newSentence = createSetence(generateNounPhrase(nouns, determiners, adjectives, prepositions), generateVerbPhrase(verbs, adverbs));
    console.log(newSentence.getSentence());
}



