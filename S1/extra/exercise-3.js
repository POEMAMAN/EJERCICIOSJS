const movies = [
{name: "Your Name", durationInMinutes: 130},
{name: "Pesadilla antes de navidad", durationInMinutes: 225}, 
{name: "Origen", durationInMinutes: 165}, 
{name: "El señor de los anillos", durationInMinutes: 967}, 
{name: "Solo en casa", durationInMinutes: 214}, 
{name: "El jardin de las palabras", durationInMinutes: 40}];
let shortMovies = undefined;
let mediumMovies = undefined;
let largeMovies = undefined;
for (let i = 0; i < movies.length; i++) { if (movies[i].durationInMinutes < 100)
     {shortMovies.push(movies[i])} 
     else if (movies[i].durationInMinutes >= 100 && movies[i].durationInMinutes < 200 ) 
     {mediumMovies.push(movies[i])} 
     else (movies[i].durationInMinutes >= 200)
     {largeMoviesMovies.push(movies[i])}}

console.log(movies[1]);
console.log(mediumMovies);
console.log(largeMovies);

