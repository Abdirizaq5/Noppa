// https://game-icons.net/tags/dice.html
const div = document.querySelector('div')
const img = document.querySelector('img')


div.addEventListener('click',() => {
    const random_number = Math.floor(Math.random() * 6) + 1
    img.src = './img/' + random_number + '.png'
})

//document.querySelector('img').src = './img/' + getImage(random_number)
//If Images are named using numbers (1,2, etc.) this function is obsolete.