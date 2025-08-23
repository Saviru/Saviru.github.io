let toggleMenu = document.querySelector('.toggleMenu');
let navbar = document.querySelector('.navbar');
let activeLink = document.querySelector('.page');


let logo = document.querySelector('.logo');
let portfolios = document.getElementsByClassName('portfolios');
let nav = document.querySelector('.nav');

let navigation = document.getElementsByClassName("page");

for (const element of navigation) {
  element.addEventListener("click", function() {
    let current = document.getElementsByClassName("activeLink");
    current[0].className = current[0].className.replace(" activeLink", "");
    element.className += " activeLink";
  });
}

toggleMenu.onclick = function() {
    navbar.classList.toggle('active');

}

window.addEventListener("load", (event) => {
    if(window.innerWidth > 660) {

        let scroll = this.scrollY;
        if (scroll > 500) {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
        } 
        
        if (scroll < 500) {
            toggleMenu.style.display = 'none';
            navbar.classList.add('active');
        } 
    } else {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
    }

});


window.addEventListener("resize", (event) => {
    if(window.innerWidth > 660) {

        let scroll = this.scrollY;
        if (scroll > 500) {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
        } 
        
        if (scroll < 500) {
            toggleMenu.style.display = 'none';
            navbar.classList.add('active');
        } 
    } else {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
    }
});


window.addEventListener("scroll", (event) => {

    let scroll = this.scrollY;
    if(window.innerWidth > 660) {

        if (scroll > 500) {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
        } 
        
        if (scroll < 500) {
            toggleMenu.style.display = 'none';
            navbar.classList.add('active');
        } 
    } else {
            toggleMenu.style.display = 'flex';
            navbar.classList.remove('active');
    }

    if(scroll > 600) {
        logo.style.color = 'transparent';
        for (const element of portfolios) {
            element.style.color = 'transparent';
        }

        nav.style.justifyContent = 'center';
    } else {
        logo.style.color = 'white';
        for (const element of portfolios) {
            element.style.color = 'white';
        }
    }

});

