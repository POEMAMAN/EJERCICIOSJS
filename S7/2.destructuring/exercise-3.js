const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};


let {name: nombre, race} = animalFunction();


console.log(nombre, race);




