  const countries = ["Japón", "Nicaragua", "Suiza", "Australia", "Venezuela"];
  let body$$ = document.querySelector(`body`);

  const ul$$ = document.createElement("ul");
  body$$.appendChild(ul$$);

  for (countrie of countries) {
    const li$$ = document.createElement("li");
    li$$.textContent = countrie;
    ul$$.appendChild(li$$);
    }

    //Funciona//