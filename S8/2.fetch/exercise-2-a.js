const baseUrl = 'https://api.nationalize.io?name=';

const button$$ = document.querySelector('#search')



async function clickBtn () {
    const input$$ = document.querySelector('input')
    const value = input$$.value
    const response = await fetch(baseUrl + value);
    const json = await response.json;
    return json;
}


button$$.addEventListener('click', clickBtn)

//Funciona//    
