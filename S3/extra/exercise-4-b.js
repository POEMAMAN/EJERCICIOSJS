const countries = [
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=1" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=2" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=3" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=4" },
    { title: "Random title", imgUrl: "https://picsum.photos/300/200?random=5" },
  ];
  
  for (countrie of countries) {
      let div$$ =document.createElement('div');
      let h4$$ =document.createElement('h4');
      let img$$ =document.createElement('img');
      document.body.appendChild(div$$);
      div$$.appendChild(h4$$);
       h4$$.textContent = countrie.title
      h4$$.appendChild(img$$);
      img$$.textContent = countrie.imgUrl
  }

  let btnEraser$$ = document.querySelector('button');
  btnEraser$$.setAttribute("onclick", "eraser");

  btnEraser$$.onclick = function () {
    let divERased$$ = document.querySelector('div');
    this.parentElement.removeChild(divERased$$);
    
  }