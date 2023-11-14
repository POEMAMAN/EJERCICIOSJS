
function swap (array,index1,index2) {
    let value1 = array[index1];
    let value2 = array[index2];
    array[index1] = value2;
    array[index2] = value1;
    return array;
};
arrayy = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño']
swap(arrayy,1,3);
console.log(arrayy);

// Funciona//
