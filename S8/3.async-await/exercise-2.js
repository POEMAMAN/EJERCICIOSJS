async function getCharacters() {
    const res = fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(characters => console.log(characters));
}

getCharacters();

//no funciona//