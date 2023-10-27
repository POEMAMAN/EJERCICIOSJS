let pElement = document.createElement('p');
pElement.textContent = 'Voy en medio!';

const secondDiv$$ = document.querySelectorAll('div')[1];
document.body.insertBefore(pElement,secondDiv$$);