const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];

let body$$ = document.querySelector(`body`);

const ul$$ = document.createElement("ul");
body$$.appendChild(ul$$);

for (car of cars) {
  const li$$ = document.createElement('li');
  li$$.textContent = car;
  ul$$.appendChild(li$$);
  li$$.setAttribute('data-function','printHere')
  }