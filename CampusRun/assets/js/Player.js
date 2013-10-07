function Player(ctx, img, heightPerc, spriteCnt, offsetXPerc, offsetYPerc)
{	
	//Default settings
	this.framesPerSprite = 8;	
	
	var frame = 0;	
	var spriteX = 0;
	var spriteWidth = img.width/spriteCnt;
	var increase = Math.PI/50;
	var jmpCnt = 0;
	var jmpHeight = 0;
	
	//OnCnvsProperties
	var posX;
	var posY;
	var heightOnCnvs;
	var widthOnCnvs;
	setOnCnvsProperties();
	
	Player.prototype.draw = function()
	{
		jmpCnt += increase;
		if(jmpHeight > 0)
			{
				jump();
			}
		if(frame >= this.framesPerSprite)
		{
			spriteX = (spriteX+spriteWidth)%img.width;
			frame = 0;
		}
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		setOnCnvsProperties();
		ctx.drawImage(img, spriteX, 0, spriteWidth, img.height,
				  posX, posY, widthOnCnvs, heightOnCnvs);
		frame++;
	}
	
	function jump()
	{
		jmpHeight = (Math.sin(jmpCnt))*150;
	}
	
	Player.prototype.resize = function()
	{
		setOnCnvsProperties();
	}
	
	function setOnCnvsProperties()
	{
		posX = ctx.canvas.width*offsetXPerc;
		posY = ctx.canvas.height-(ctx.canvas.height*(heightPerc+offsetYPerc))-jmpHeight;
		heightOnCnvs = ctx.canvas.height*heightPerc;
		widthOnCnvs = (heightOnCnvs/img.height)*spriteWidth;		
	}
	
	window.onclick = function() 
	{
		if(jmpHeight <= 0)
			{
				jmpCnt = 0;
				jmpHeight = 1;
			}
	};
}