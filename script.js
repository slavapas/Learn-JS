// add div element into HTML
let newLi = document.createElement('li')
// add a class to newLi
newLi.classList.add('my-li-class')
// add div element into HTML
let newA = document.createElement('a')
// get menu
let mainMenu = document.getElementById('main-nav').getElementsByTagName('ul')[0]

// add our new element inside mainMenu
mainMenu.appendChild(newLi)
mainMenu.appendChild(newA)


