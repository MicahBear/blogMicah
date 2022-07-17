let lasScrollTop;
let navBar = document.querySelector('#nav')

window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollTop > lasScrollTop) {
        navBar.style.top = '-80px';
    } else {
        navBar.style.top = '0';
    }
    lasScrollTop = scrollTop;
})