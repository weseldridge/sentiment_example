var sentiment = require('sentiment');
var _ = require('lodash');

const quotes = [
    {
        quote: 'Don\'t cry because it\'s over, smile because it happened.',
        person: 'Dr. Seuss'
    },
    {
        quote: 'I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.',
        person: 'Marilyn Monroe'
    },
    {
        quote: 'Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.',
        person: 'Albert Einstein'
    },
    {
        quote: 'A room without books is like a body without a soul.',
        person: 'Marcus Tullius Cicero'
    },
    {
        quote: 'Be the change that you wish to see in the world.',
        person: 'Mahatma Gandhi'
    },
    {
        quote: 'If you tell the truth, you don\'t have to remember anything.',
        person: 'Mark Twain'
    },
];

console.log("Quote Sentiment Analysis...");
console.log("-------------------------------------");
console.log("");
_.forEach(quotes, function(quote) {
    console.log(quote.quote);
    console.log("---  " + quote.person);
    console.log("");
    console.log("Sentiment....");
    var results = sentiment(quote.quote);
    console.log("score: " + results.score + " comparative: " + results.comparative);
    console.log("");
    console.log("-------------------------------------");
    console.log("");
});