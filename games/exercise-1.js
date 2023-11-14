let cardArray = [
  {
    id: 1,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 2,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 3,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 4,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 5,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 6,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
  {
    id: 7,
    name: "earth",
    img: "public/exercise-1/earth.svg",
  },
  {
    id: 8,
    name: "jupiter",
    img: "public/exercise-1/jupiter.svg",
  },
  {
    id: 9,
    name: "mars",
    img: "public/exercise-1/mars.svg",
  },
  {
    id: 10,
    name: "mercury",
    img: "public/exercise-1/mercury.svg",
  },
  {
    id: 11,
    name: "saturn",
    img: "public/exercise-1/saturn.svg",
  },
  {
    id: 12,
    name: "uranus",
    img: "public/exercise-1/uranus.svg",
  },
];

// const starButton$$ = document.createElement('button');
// const body$$ = document.querySelector('body');
// body$$.appendChild(starButton$$);
// starButton$$.textContent ='NEW GAME';
// starButton$$.addEventListener('click', newGame)

const container$$ = document.querySelector(".b-grid");
for (const card of cardArray) {
  const item$$ = document.createElement('div')
  item$$.classList.add('item')
  item$$.addEventListener('click', showMe)
  const img$$ = document.createElement('img');
  img$$.src = card.img;
  img$$.alt = card.name;
  img$$.setAttribute('data-img', card.name)
  img$$.setAttribute('data-id', card.id)
  img$$.classList.add('hidden');
  container$$.appendChild(item$$);
  item$$.appendChild(img$$);
  //*TODO COMO voy a referebncia r las diferecnias

}
const score$$ = document.querySelector('#score');
let score = 0;
score$$.textContent = score;
let img1$$ = null;
function showMe() {
  const img$$ = this.querySelector('img');
  img$$.classList.remove('hidden');
  if (img1$$ === null) {
    img1$$ = img$$
  }
  else {
    const img1ImgId = img1$$.getAttribute('data-id');
    const img2ImgId = img$$.getAttribute('data-id');
    if (img1ImgId !== img2ImgId) {
      lookImg(img1$$, img$$);
      img1$$ = null;
    }

  }
}

function lookImg(img1$$, img2$$) {
  const img1 = img1$$.getAttribute('data-img');
  const img2 = img2$$.getAttribute('data-img');
  setTimeout(function() {
  if (img1 === img2) {
    img1$$.src = "public/exercise-1/tick.svg";
    img2$$.src = "public/exercise-1/tick.svg";
    addpoint();
  } else {
    
    img1$$.classList.add('hidden');
    img2$$.classList.add('hidden');}
  }, 1000}



// function upgradeScore () {
//   document.querySelector('h3') = score;
//   score+1;
// }

// function newGame () {
 
// }    

function addpoint () {
    const score$$ =document.querySelector('#score');
    score$$.textContent = score;
    score++;
}