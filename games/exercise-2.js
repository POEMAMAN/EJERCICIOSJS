let timer;
const Diglett_SWICHT_TIME = 2000;


const moleContainer$$ = [...document.querySelectorAll('.b-mole')];

starBtn$$ = document.createElement('button');
starBtn$$.setAttribute("id","Star");
starBtn$$.textContent = "STAR GAME";
document.body.append(starBtn$$)
starBtn$$.addEventListener('click', startGame)

for (const moleP of moleContainer$$) {
    moleP.addEventListener('click', whack)
}

let timeUp = true;
let n = 30;
let score = 0;

function startGame () {
    timer = setInterval(changeDiglett, Diglett_SWICHT_TIME);
    timeUp = false;
    const score$$ = document.querySelector('[data-function="score"]');
    score$$.textContent = 0;
    setInterval(updateCounter,1000);
    setTimeout(endGame, 30000)

}

function getRandomMole () {
    return Math.floor(Math.random() * 6);
}

function changeDiglett () {
    eraseUp ();
    const moleP$$ = moleContainer$$[getRandomMole()];
    moleP$$.classList.add('up');
    console.log('Diglett cambia');
}

function whack () {
    if (!timeUp && this.classList.contains('up')) {
        this.classList.remove('up');
        addpoint()
    }
}

function addpoint () {
    const scoreBoard$$ = document.querySelector('[data-function="score"]')
    scoreBoard$$.textContent = score;
    score++;        
}


function updateCounter () {
    const totalTime$$ = document.querySelector('[data-function="time-left"]')
    totalTime$$.textContent = n;
        if(n !== 0){
        n-=1;}
}

function endGame () {
    clearInterval(timer);
    eraseUp ();
    console.log('End Game')
    alert('Your score is ' + score)
    }

function eraseUp () {
    for (const moleP of moleContainer$$) {
        moleP.classList.remove('up');}
}

//FUNCIONA//




