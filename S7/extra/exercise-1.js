const videogames = [
    {name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5},
    {name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5},
    {name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8},
    {name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5},
    {name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5},
    {name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10},
]

const RPGvideogames = videogames.filter(function(videogame) {
    return videogame.genders.includes('RPG')
});

console.log(RPGvideogames)

const videogamesReduce  = RPGvideogames.reduce(function (acc,videogame) {
    return acc + videogame.score;
}, 0)

const mediam = videogamesReduce / RPGvideogames.length;

console.log(mediam)

const videogameFind = RPGvideogames.filter(function (videogame) {
    const genders = videogame.genders;
    const rpgGenders = genders.find(gender => gender === 'RPG')
    return RPGvideogames !== undefined;
});

console.log(videogameFind)

//Funciona//