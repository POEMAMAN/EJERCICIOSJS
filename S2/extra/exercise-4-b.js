let texts = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const text1 = "Caracol";
const text2 = "Mosquito";
const text3 = "Salamandra";
const text4 = "Ajolote";

console.log(texts);
function findArrayIndex(array, text) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == text) {
            return i;
            break;
        }
    }}
function removeItem (array, text) {
    const index = findArrayIndex(array, text);
    if (index > -1) //condicional para evitar que si no existe te borre el ultimo
    {
    texts.splice((findArrayIndex(array, text)),1);
    }
    return texts;
}

let prueba1 = removeItem(texts, text1);
console.log(texts); //Funciona
//let prueba2 = removeItem(texts, text3);
//console.log(texts); //Funciona
