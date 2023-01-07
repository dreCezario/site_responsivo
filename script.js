const menu = document.querySelector('.menu-mobile-icon')

menu.addEventListener('click', ()=>{
    let menuItems = document.querySelector('.menu-items')
    if(menuItems.classList.contains('show')){
        menuItems.classList.add('hide')
        menuItems.classList.remove('show')
    }
    else{
        menuItems.classList.add('show')
        menuItems.classList.remove('hide')
    }
})