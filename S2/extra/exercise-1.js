const movies = [
    {title: 'Madaraspar', duration: 192, categories: ['comedia', 'aventura']},
    {title: 'Spiderpan', duration: 122, categories: ['aventura', 'acción']},
    {title: 'Solo en Whatsapp', duration: 223, categories: ['comedia', 'thriller']},
    {title: 'El gato con guantes', duration: 111, categories: ['comedia', 'aventura', 'animación']},
];

let xAccion = [];
let xAnimacion = [];
let xAventura = [];
let xComedia = [];
let xThriller = [];

for (x of movies) {
    if (x.categories.includes("comedia")) {
        xComedia.push(x.title);
    } if (x.categories.includes("aventura")) {
        xAventura.push(x.title);
    } if (x.categories.includes("acción")) {
        xAccion.push(x.title);
    } if (x.categories.includes("thriller")) {
        xThriller.push(x.title);
    } if (x.categories.includes("animación")) {
        xAnimacion.push(x.title);
    }
}

console.log("Títulos de género Acción: " + xAccion);
console.log("Títulos de género Animación: " + xAnimacion);
console.log("Títulos de género Aventura: " + xAventura);
console.log("Títulos de género Comedia: " + xComedia);
console.log("Títulos de género Thriller: " + xThriller);
