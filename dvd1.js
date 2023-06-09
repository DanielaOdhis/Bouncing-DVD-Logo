let x;
let y;
let vx;
let vy;
let dvd;

function preload() {
    dvd = loadImage("dvd-rom-logotype.png");
}

function setup() {
    createCanvas(1350, 650);
    x = 0;
    y = 0;
    vx = 3;
    vy = 3;
}

function draw() {
    background(250, 128, 114);
    image(dvd, x, y, 160, 120);

    x += vx;
    y += vy;

    if (x < 0 || x > width - 160) {
        vx = -vx;
    }
    if (y < 0 || y > height - 120) {
        vy = -vy;
    }
}

setup();
setInterval(draw, 16.67);