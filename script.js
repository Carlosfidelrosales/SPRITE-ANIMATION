const canvas = document.getElementById('canvasBoy');
const ctx = canvas.getContext('2d');

const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'sporty_boy.png';

const spriteWidth = 380.33;
const spriteHeight = 455.33;
let frameX = 0;
let frameY = 2;

let gameFrame = 0;
const staggerFrame = 8;

function animate(){
	ctx.clearRect(0,0, CANVAS_WIDTH, CANVAS_HEIGHT);
	//ctx.drawImage(image, sx, sy, sw, sh, dx, dy, dw, dh);
	ctx.drawImage(playerImage, frameX * spriteWidth, frameY * spriteHeight, spriteWidth, spriteHeight, 100, 80, spriteWidth, spriteHeight);
	if(gameFrame % staggerFrame == 0){
		if(frameX < 4)
		{
			frameX++;
		}
		else{
			frameX=0;
		}
	}
	gameFrame++;
	requestAnimationFrame(animate);
}
animate();