const baseUrl = 'https://api.nationalize.io?name=';

const button$$ = document.querySelector('button')
button$$.addEventListener('click', clickBtn)



async function clickBtn () {
    const input$$ = document.querySelector('input')
    const value = input$$.value
    const response = await fetch(baseUrl + value);
    const json = await response.json();
    console.log(json);
    createP(json)
}

function createP (data) {
    const div$$ = document.createElement('div');
    document.body.appendChild(div$$);
    for (let country of data.country) {
        const newP$$ = document.createElement('p');
        const probability = country.probability * 100;
        newP$$.textContent = 'El nombre ' + data.name + ' tiene un' + probability + ' por ciento de ser ' + country.country_id + ' y un ' + probability + ' de ser de ' + country.country_id;
        div$$.appendChild(newP$$);
        const newBtn$$ = document.createElement('button');
        newBtn$$.textContent = 'X';
        newP$$.appendChild(newBtn$$)
        newBtn$$.addEventListener('click', eraser)
        function eraser () {
            this.parentNode.remove(newP$$)
        }
    }
}




//Funciona//    


