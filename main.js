const ball = document.querySelector('.ball')
const blue = document.querySelector('.blue_cap')
const red = document.querySelector('.red_cap')
const score = document.querySelector('.score')
const blue_score = document.querySelector('.blue_score')
const red_score = document.querySelector('.red_score')
const body = document.body
const goals = {
    blue: 0,
    red: 0
}

body.ondragover = (e) => {
    e.preventDefault()
}
ball.ondragend = (e) => {
    const {x,y} = e

    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.translate = "-50% -50%"
}
blue.ondragenter = (e) => {
    e.preventDefault()
    goals.red ++
    blue_score.innerHTML = goals.blue
    red_score.innerHTML = goals.red
    score.classList.add('active')
    activeTimeout = setTimeout(() => {
        score.classList.remove('active')
        ball.style.left = '50%'
        ball.style.top = '50%'
        ball.style.translate = "-50% -50%"
    }, 2000)
}
red.ondragenter = (e) => {
    e.preventDefault()
    goals.blue ++
    blue_score.innerHTML = goals.blue
    red_score.innerHTML = goals.red
    score.classList.add('active')
    activeTimeout = setTimeout(() => {
        score.classList.remove('active')
        ball.style.left = '50%'
        ball.style.top = '50%'
        ball.style.translate = "-50% -50%"
    }, 2000)
}