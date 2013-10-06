//Canvas
backgroundCnvs = document.getElementById('background');
objectsCnvs = document.getElementById('objects');
playerCnvs = document.getElementById('player');

//Context
backgroundCtx = backgroundCnvs.getContext('2d');
objectsCtx = objectsCnvs.getContext('2d');
playerCtx = playerCnvs.getContext('2d');

//Image
backgroundImg = new Image();
backgroundImg.src = '../img/background.png';
playerImg = new Image();
playerImg.src = '../img/player.png';

//Functions
function init()
{
	background = new Background(backgroundCtx, backgroundImg);
	player = new Player(playerCtx, playerImg, backgroundCnvs.height*0.3, 4);
	player.xOnCanvas = backgroundCnvs.width*0.1;
	player.yOnCanvas = backgroundCnvs.height*0.05;
	play();
}

function play()
{
	background.draw();
	player.draw();
	requestAnimationFrame(play);
}

//EventListener
window.onload = function()
{
	init();
}

//RequestAnimationFrame
(function() {
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
	window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
	window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
	|| window[vendors[x]+'CancelRequestAnimationFrame'];
	}
	if (!window.requestAnimationFrame)
	window.requestAnimationFrame = function(callback, element) {
	var currTime = new Date().getTime();
	var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	var id = window.setTimeout(function() { callback(currTime + timeToCall); },
	timeToCall);
	lastTime = currTime + timeToCall;
	return id;
	};
	if (!window.cancelAnimationFrame)
	window.cancelAnimationFrame = function(id) {
	clearTimeout(id);
	};
	}());