const menuButton = document.querySelector('.header_button_image')
const menu = document.querySelector('.menu')

menuButton.addEventListener('click', event =>{
    event.preventDefault()
    console.log(event)

    if (menu.style.display == '' || menu.style.display == 'none'){
        menu.style.display = 'flex'
    } else { menu.style.display = 'none'}

    if (menuButton.src == 'http://127.0.0.1:5500/images/icon-hamburger.svg'){
        menuButton.src = './images/icon-close.svg'
    } else {menuButton.src = './images/icon-hamburger.svg'}
})