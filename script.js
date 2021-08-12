// add div element into HTML
let newLi = document.createElement('li')
// add div element into HTML
let newA = document.createElement('a')
// get menu
let mainMenu = document.getElementById('main-nav').getElementsByTagName('ul')[0]

// add our new element
mainMenu.appendChild(newLi).appendChild(newA)
mainMenu.appendChild(newA)


