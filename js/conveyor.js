var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var ball = new Image();
var CSE_top = new Image();
var CSE_right = new Image();
var dir = 1;

canvas.width = 640;
canvas.height = 374;
ball.src = './images/pomball.png';
CSE_top.src = './images/CSE_top.png';
CSE_right.src = './images/CSE_left.png';

var mySprite = {
    x: 5,
    y: 280,
    width: 50,
    height: 50,
    speed: 200,
    color: '#c00'
};

var keysDown = {};
window.addEventListener('keydown', function(e) {
    keysDown[e.keyCode] = true;
});
window.addEventListener('keyup', function(e) {
    delete keysDown[e.keyCode];
});

function update(mod) {
    if (37 in keysDown) { //left
        mySprite.x -= mySprite.speed * mod; 
		if (dir === 1) { // between 0-130, 270-430
			if ( mySprite.x > -5 & mySprite.x < 0) { mySprite.x =0; }
			if ( mySprite.x > 265 & mySprite.x < 270) { mySprite.x =270; }
		}
		if (dir === 0) { // between 130-270, 430-560
			if ( mySprite.x > 125 & mySprite.x < 130) { mySprite.x =130; }
			if ( mySprite.x > 425 & mySprite.x < 430) { mySprite.x =430; }
		}
    }
    if (39 in keysDown) { //right
        mySprite.x += mySprite.speed * mod;
		if (dir === 1) { // between 0-130, 270-430
			if ( mySprite.x > 130 & mySprite.x < 135) { mySprite.x =130; }
			if ( mySprite.x > 430 & mySprite.x < 435) { mySprite.x =430; }
		}
		if (dir === 0) { // between 130-270, 430-560
			if ( mySprite.x > 270 & mySprite.x < 275) { mySprite.x =270; }
			if ( mySprite.x > 560 & mySprite.x < 565) { mySprite.x =560; }
		}
	}
	if (38 in keysDown) { //up
		dir=0;
    }
	if (40 in keysDown) { //down
		dir=1;
    }
}
 
function render() {
	if (dir === 0)
		{var pat=ctx.createPattern(CSE_top,"repeat");}
	else 
		{var pat=ctx.createPattern(CSE_right,"repeat");}
		
	ctx.fillStyle = pat;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
	/*
    ctx.fillStyle = mySprite.color;
    ctx.fillRect(mySprite.x, mySprite.y, mySprite.width, mySprite.height);*/
    ctx.drawImage(ball,mySprite.x,mySprite.y);
	
}
 
function run() {
    update((Date.now() - time) / 1000);
    render();
    time = Date.now();
}
 
var time = Date.now();
setInterval(run, 10);