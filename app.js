/*
function lightmode() {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
}

function darkmode() {
    document.body.style.backgroundColor = rgb(36, 37, 42);
    document.body.style.color = "white";
}


function shorten() {
    document.location.href('/shorten')
}


document.addEventListener('scroll' , () => {
    const header = document.getElementById('nav-header');
    if (window.scrollY == 0) {
        header.classList.add('scrolled');
    }
    else {
        header.classList.remove('scrolled');
    }
})
*/
const switchTheme = () => {
    const rootElem = document.Element
    let dataTheme = rootElem.getAttribute('data-theme'),
        newTheme
    newTheme = (dataTheme == 'light') ? 'dark' : 'light'

    // set the new html attribute
    rootElem.setAttribute('data-theme', newTheme)

    // set the new local storage
    localStorage.setItem('theme', newTheme)
}

document.getElementById('theme-switcher').addEventListener('click', switchTheme);
