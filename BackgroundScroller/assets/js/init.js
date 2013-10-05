//Canvas
backgroundCnvs = document.getElementById('background');

//Context
backgroundCtx = backgroundCnvs.getContext('2d');

//Image
backgroundImg = new Image();
backgroundImg.src = '../img/background.png';

//Functions
function init()
{
	background = new Background(backgroundCtx, backgroundImg, 2);
	play();
}

function play()
{
	background.draw();
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