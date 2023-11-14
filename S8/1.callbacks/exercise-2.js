const userAnwsers = [];

function confirmExample(description){
    return confirm(description);
}

function promptExample(description){
    return prompt(description);
}

function father(description, callback){
    userAnwsers.push(callback(description))

}


father('pepe', confirmExample)
father('andres', promptExample)


console.log(userAnwsers)

//FUNCIONA//