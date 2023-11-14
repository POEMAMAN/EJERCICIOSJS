const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let div$$ = document.querySelector(`div`);
//otro metodo//
// let div$$ = document.querySelector('div[data-funtion = "printHere"]'); //

const ul$$ = document.createElement("ul");
div$$.appendChild(ul$$);

for (car of cars) {
  const li$$ = document.createElement('li');
  li$$.textContent = car;
  div$$.appendChild(li$$);

  }