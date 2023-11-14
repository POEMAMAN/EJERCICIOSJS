const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];

const citiesNames = cities.map(function(city) {
  let cityName = city.name;
  if (city.isVisited) {
    cityName += ' (Visitado)';
  }
  return cityName;
});

console.log(citiesNames)

//Funciona//