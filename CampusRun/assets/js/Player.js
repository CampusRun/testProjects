function Player(ctx, img, heightOnCnvs, spriteCnt)
{
	frame = 0;
	xOnImg = 0;
	
	//default settings
	this.framesPerSprite = 8;
	this.xOnCanvas = 0;
	this.yOnCanvas = 0;
	
	this.draw = function()
	{
		widthOnImg = img.width/spriteCnt;
		heightOnImg = img.height;
		widthOnCnvs = (heightOnCnvs/heightOnImg)*widthOnImg;
		
		if(frame >= this.framesPerSprite)
			{
				xOnImg = (xOnImg+widthOnImg)%img.width;
				frame = 0;
			}
		
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(img, xOnImg, 0, widthOnImg, heightOnImg, this.xOnCanvas, ctx.canvas.height-heightOnCnvs-this.yOnCanvas, widthOnCnvs, heightOnCnvs);
		frame++;
	}
}