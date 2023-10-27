
let texts = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote'];
const text1 = "Caracol";
const text2 = "Mosquito";
const text3 = "Salamandra";
const text4 = "Ajolote";

    function findArrayIndex(array, text) {
        for (var i = 0; i < array.length; i++) {
            if (array[i] == text) {
                return i;
            }
        }
    }

    let prueba1 = findArrayIndex(texts, text3);
    console.log(prueba1);
    let prueba2 = findArrayIndex(texts, text2);
    console.log(prueba2);
    let prueba3 = findArrayIndex(texts, text1);
    console.log(prueba3);


    //hector//
 //   function findArrayIndex(array, text) {
   //     return.array.indexOf(text);
  //  }

 //   console.log(findArrayIndex(array, 'Mosquito'));