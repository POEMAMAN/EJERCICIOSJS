const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]

let sounds = []
let xWaves = 0;
let xRain = 0;
let xFirecamp = 0;
let xShower = 0;
let xTrain = 0;
let xWind = 0;
let x = 0;
for (var nombre in users) {

  let props = users[nombre].favoritesSounds;

    if (props.hasOwnProperty("waves")){
        xWaves = xWaves + 1;
    } if (props.hasOwnProperty("rain")){
        xRain = xRain + 1;
    } if (props.hasOwnProperty("firecamp")){
        xFirecamp = xFirecamp + 1;
    } if (props.hasOwnProperty("shower")){
        xShower = xShower + 1;
    } if (props.hasOwnProperty("train")){
        xTrain = xTrain + 1;
    } if (props.hasOwnProperty("wind")){
        xWind = xWind + 1;} else {}
 }
console.log("Waves ha sido favorito " + xWaves + " veces.");
console.log("Rain ha sido favorito " + xRain + " veces.");
console.log("Rain ha sido favorito " + xFirecamp + " veces.");
console.log("Rain ha sido favorito " + xShower + " veces.");
console.log("Rain ha sido favorito " + xTrain + " veces.");
console.log("Rain ha sido favorito " + xWind + " veces.");
   

