fetch('https://api.agify.io?name=michael')
.then((response) => {
    console.log(response)
    return response.json();
})
.catch(function (badResponse) {  
})
.then((myJson) => {
    console.log(myJson)
});

//Funciona//