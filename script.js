window.addEventListener("load", function() {
    let header = document.querySelector('header');
    let databody = document.querySelector('.databody');


    document.body.style.height = header.clientHeight + databody.clientHeight + 'px';
    
}, false);


window.addEventListener("resize", function() {
    let header = document.querySelector('header');
    let databody = document.querySelector('.databody');

    document.body.style.height = header.clientHeight + databody.clientHeight + 'px';
    
}, false);

