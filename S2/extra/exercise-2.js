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
];
for (var nombre in users) {
    let sounds = []
    let xWaves = 0;
    let xRain = 0;
    let xFirecamp = 0;
    let xShower = 0;
    let xTrain = 0;
    let xWind = 0;
    let x = 0;

  let props = users[nombre].favoritesSounds;

    if (props.hasOwnProperty("waves")){
        xWaves = xWaves + props.waves.volume;
        sounds.push(xWaves);
    } if (props.hasOwnProperty("rain")){
        xRain = xRain + props.rain.volume;
        sounds.push(xRain);
    } if (props.hasOwnProperty("firecamp")){
        xFirecamp = xFirecamp + props.firecamp.volume;
        sounds.push(xFirecamp);
    } if (props.hasOwnProperty("shower")){
        xShower = xShower + props.shower.volume;
        sounds.push(xShower);
    } if (props.hasOwnProperty("train")){
        xTrain = xTrain + props.train.volume;
        sounds.push(xTrain);
    } if (props.hasOwnProperty("wind")){
        xWind = xWind + props.wind.volume;
        sounds.push(xWind);
    }

    for (let volume of sounds){
    x = x + volume;
    }
        console.log("La media de volumen de " + users[nombre].name + " es: " + (x/3));
    }

