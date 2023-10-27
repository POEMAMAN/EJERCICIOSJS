const input$$ = document.querySelector('input');
input$$.addEventListener ('focus', checkValue);
function checkValue (e){
    const target$$ = e.target;
    console.log(target$$.value);}


