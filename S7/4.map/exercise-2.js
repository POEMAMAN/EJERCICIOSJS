const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];


const names = users.map(function(user) {
  const userName = user.name;
  if (userName[0] === 'A') {
    return 'Anacleto';
  } 
  return user.name})

console.log(names)
//Funciona//


  




