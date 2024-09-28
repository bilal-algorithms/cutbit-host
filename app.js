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

const switchTheme = () => {
    const rootElem = document.documentElement
    let datatheme = rootElem.getAttribute('data-theme'),
        newTheme

    newTheme = (datatheme == 'light') ? 'dark' : 'light';

    console.log('Old theme:', datatheme);
    console.log('New theme:', newTheme);

    rootElem.setAttribute('data-theme', newTheme);
    // Update the theme switcher's before pseudo-element
    document.getElementById('theme-switcher').style.setProperty('--switch-circle-pos', newTheme === 'light' ? '0.3rem' : '3rem');
}