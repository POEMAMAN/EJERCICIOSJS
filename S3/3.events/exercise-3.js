const input$$ = document.querySelector('input');
input$$.addEventListener ('input', getValue);
function getValue (e){
    console.log(this.value);}