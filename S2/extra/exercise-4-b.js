let texts = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const text1 = "Caracol";
const text2 = "Mosquito";
const text3 = "Salamandra";
const text4 = "Ajolote";

function findArrayIndex(array, text) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] == text) {
            return i;
            break;
        }
    }}
function removeItem (array, text) {
    texts.splice((findArrayIndex(array, text)),1);
}

let prueba1 = removeItem(texts, text3);
console.log(texts);
let prueba2 = removeItem(texts, text2);
console.log(texts);
let prueba3 = removeItem(texts, text1);
console.log(texts);