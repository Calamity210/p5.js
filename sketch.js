var xpos = 0;
var ypos = 200;
var itemx;
var itemy;
var points = 0;

function setup() {
    createCanvas(640, 480);
    itemx = random(0, width);
    itemy = random(0, height);
}

function draw() {
    background(255);

    fill(200, 0, 255);

    stroke(0);

    ellipseMode(CENTER);

    if (xpos > width || xpos < 0) {
        xpos = 0;
        ypos = 0;
    }



    // draw a circle
    ellipse(xpos, ypos, 75, 75);

    rect(itemx, itemy, 50, 50)


    if (keyIsPressed) {
        switch (keyCode) {
            case UP_ARROW:
                ypos -= 2;
                break;
            case DOWN_ARROW:
                ypos += 2;
                break;
            case LEFT_ARROW:
                xpos -= 2;
                break;
            case RIGHT_ARROW:
                xpos += 2;
                break;
        }
    }

    if (xpos >= itemx - 50 && xpos <= itemx + 50 &&
        ypos >= itemy - 50 && ypos <= itemy + 50) {
        points++;
        xpos = 0;
        ypos = 0;
        itemx = random(0, width);
        itemy = random(0, height);
    }



    // display xpos variable
    fill(0);
    text("Points: " + points, 25, 25);
}