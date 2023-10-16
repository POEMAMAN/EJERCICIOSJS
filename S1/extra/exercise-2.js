const fruits = ['Strawberry', 'Banana', 'Orange', 'Apple'];
const foodSchedule = [
{name: "Salad", isVegan: true},
{name: "Salmon", isVegan: false}, 
{name: "Tofu", isVegan: true}, 
{name: "Burger", isVegan: false}, 
{name: "Rice", isVegan: true}, 
{name: "Pasta", isVegan: true}];

for (let i = 0; i < foodSchedule.length; i++) { 
    if (!foodSchedule[i].isVegan) 
    {foodSchedule.splice(i,1,{name: fruits[i-1], isVegan: true})} 
};
console.log(foodSchedule);
/* Indicado hector, es mas escalable si tuviese mas propiedades */
let fruitsIndex = 0;
for (let i = 0; i < foodSchedule.length; i++) { 
    let food = foodSchedule[i];
    if (!food.isVegan) {
        if (fruitsIndex === fruits.length) {
            console.log ('There are no more fruits') }
            /* Clausula defensiva en caso de error, si me quedase sin frutas no reemplaza y no duplica frutas */
    else {
        food.name = fruits[fruitsIndex];
        food.isVegan = true;
        fruitsIndex++;
        /* este contador y variable sirve para no repetir las frutas*/}
    }};