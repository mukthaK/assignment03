let coinFlip;
do {
    coinFlip = Math.round(Math.random());
    (coinFlip === 0) ? console.log('Heads') : console.log('Tails');
} while (coinFlip === 0);