let canvas = document.getElementById("background");
let ctx = canvas.getContext("2d");



let col = function(x, y, r, g, b) {
    ctx.fillStyle = `rgb(${r}, ${g}, ${b})`;
    ctx.fillRect(x, y, 1, 1);
}

let Red = function(x, y, t) {
    return(Math.floor(192+64*Math.cos((x*y-y^y)/500+t)));
}

let Green = function(x, y, t) {
    return(Math.floor(192+64*Math.sin((x*x*Math.cos(t/5)+y*y*Math.sin(t/3))/100)));
}

let Blue = function(x, y, t) {
    return(Math.floor(192+64*Math.sin(5*Math.sin(t/9)+((x-200)*(x-200)+(y-200)*(y-200))/1500)));
}

let t = 0;

let run = function() {
    for(x = 0; x <= 55; x++) {
        for(y = 0; y <= 55; y++) {
            col(x, y, Red(x, y, t), Green(x, y, t), Blue(x, y, t));
        }
    }
    t = t+ 0.08;
    window.requestAnimationFrame(run);
}



run();
