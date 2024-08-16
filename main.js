const ball = document.querySelector('.ball')
const body = document.body

body.ondragover = (e) => {
    e.preventDefault()
}
ball.ondragend = (e) => {
    const {x,y} = e

    ball.style.left = x + 'px'
    ball.style.top = y + 'px'
    ball.style.translate = "-50% -50%"
}