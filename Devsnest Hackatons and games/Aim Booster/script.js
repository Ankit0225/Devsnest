const crosshair = document.querySelector('.cursor img')
const target = document.querySelector('.target')
const scoreText = document.querySelector('.score')
const timer = document.querySelector('.timer')
const highscoreText = document.querySelector('highscore')
const playbutton = document.querySelector('.menupage .playbtn')

var score =0;
var timeleft = 60;
var highscore = 0;

window.onload = () => {
    scoreText.innerHTML = score;
    timer.innerHTML = timeleft;
    respawn()
    play()
}

document.addEventListener('mousemove', (e)=> {
    crosshair.style.top = `${e.clientX}px`;
    crosshair.style.left = `${e.clientY}px`;
})

const respawn = () => {
    const top = Math.floor(Math.random * window.innerHeight)
    const left = Math.floor(Math.random * window.innerWidth)
    Target.style.top = `${top}px`
    Target.style.left = `${left}px`
}

const gameover = () => {
    alert(`Gameover \n Your Score = ${score}`)
    score = 0;
    timeleft = 5;
}

const timerl = () => {
    if(timeleft === 0){
       gameover();
    }
    timer -= 1;
    score.innerHTML = score;
    timer.innerHTML = timeleft;
}

Target.addEventListener('click', ()=> {
    score +=1;
    score.innerHTML += score;
    respawn();
})