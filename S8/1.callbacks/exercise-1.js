const numbersList = [];

function sum(a, b){
    return a+b;

}

function substract(a, b){
    return a-b;
}

function father(a, b, callbak){
    const n = callbak(a,b)
    numbersList.push(n);
}

father(5, 6, sum);
father(10, 8, substract);


console.log(numbersList)

//funciona//