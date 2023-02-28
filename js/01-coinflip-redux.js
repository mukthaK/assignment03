let coinFlip;
let n = parseInt(prompt('How many times would you like to flip the coin?'));
for (let i = 0; i < n; i++) {
    coinFlip = Math.round(Math.random());
    (coinFlip === 0) ? console.log('Heads') : console.log('Tails');
}