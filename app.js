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
    const rootElem = document.documentElement;
    rootElem.classList.toggle('dark');

    if (rootElem.classList.contains('dark')) {
        localStorage.setItem('theme', 'dark');
    }
    else {
        localStorage.setItem('theme', 'light');
    }

}
