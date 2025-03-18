const franc = require('franc');
const langs = require('langs');

const input = process.argv[2];
const output = franc(input);
const language = langs.where('3', 'und', output);

if (output === 'und') {
    console.log('Could not determine the language.');
} else {
    const language = langs.where('3', output);
    if (language) {
        console.log(`Detected language: ${language.name}`);
    } else {
        console.log('Language not found.');
    }
}