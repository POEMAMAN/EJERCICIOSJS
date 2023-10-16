function rollDice(min,max) {
    let dado = Math.floor(Math.random() * max) + min;
    console.log(dado);
}

rollDice(1, 6);
rollDice(3, 6);
