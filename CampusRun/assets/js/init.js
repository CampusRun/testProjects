//Canvas
backgroundCnvs = document.getElementById('background');
objectsCnvs = document.getElementById('objects');
playerCnvs = document.getElementById('player');

//Context
backgroundCtx = backgroundCnvs.getContext('2d');
objectsCtx = objectsCnvs.getContext('2d');
playerCtx = playerCnvs.getContext('2d');

//Images
preloadArray = new Array();

backgroundImg = new Image();
backgroundImg.src = '../img/background.png';
playerImg = new Image();
playerImg.src = '../img/player.png';

preloadArray.push(backgroundImg, playerImg);

//Functions
function init()
{
	resizeCanvases();
	background = new Background(backgroundCtx, backgroundImg);
	player = new Player(playerCtx, playerImg, 0.3, 4, 0.1, 0.1)
	play();
}

function resizeCanvases()
{
	var canvasList = document.getElementsByTagName('canvas');
	for (var i=0; i < canvasList.length; i++) 
	{	
		canvasList[i].width = canvasList[i].parentNode.clientWidth;
		canvasList[i].height = canvasList[i].parentNode.clientHeight;
	};
}

function play()
{
	background.draw();
	player.draw();
	requestAnimationFrame(play);
}

function preloadImages(images, callback)
{
	remaining = images.length;
	for (var i=0; i < remaining; i++) {
		images[i].onload = function() 
		{
			--remaining;
			if(remaining <= 0)
			{
				callback();
			}
		}
	};
}

//EventListener
window.onresize = function() 
{
	resizeCanvases();
	background.resize();
	player.resize();
}

window.onload = preloadImages(preloadArray, init);

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