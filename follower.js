class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

let pictureCoords = new Point(-50, 0);
let targetCoords = new Point(0, 0);
let walking = false;

const patrickWalkingLeft = "https://i.imgur.com/tOhFOPw.gif";
const patrickWalkingRight = "https://i.imgur.com/koCa5jf.gif";
const patrickStanding = "https://i.imgur.com/BCVxXHx.png";

$(document).ready(() => {
    const body = $("body");

    body.append(`<img id=\"follower\" style=\"position: absolute; z-index: 5000;\" src=\"${patrickStanding}\"/>`);
});

$(document).mousemove(function(e){
    const follower = $("#follower");
    targetCoords.x = e.pageX - 50;
    targetCoords.y = e.pageY;

    const image = pictureCoords.x < targetCoords.x ? patrickWalkingRight : patrickWalkingLeft;

    clearTimeout();
    setTimeout(() => {
        follower.attr("src", image );
        pictureCoords.x = targetCoords.x;
        pictureCoords.y = targetCoords.y;
        follower.stop().animate({
            left: targetCoords.x, top: targetCoords.y
        }, {
            duration: 2000, 
            complete: () => {
                $("#follower").attr("src", patrickStanding);
            }
        });
    }, 1000);   
});