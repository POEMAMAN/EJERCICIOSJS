const toys = [
{id: 5, name: 'Buzz MyYear'}, 
{id: 11, name: 'Action Woman'}, 
{id: 23, name: 'Barbie Man'}, 
{id: 40, name: 'El gato con Guantes'},
{id: 40, name: 'El gato felix'}];


for (const x of toys.reverse()) {
  if(x.name.includes('gato')) {
    {toys.shift(x) && toys.shift(x+1) }
  }
}
console.log(toys);
