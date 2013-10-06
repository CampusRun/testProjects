function Background(ctx, img)
{
	offset = 0;
	
	//default settings
	this.speed = 1;
	
	//functions
	this.draw = function()
	{
		widthOnImg = img.width;
		heightOnImg = img.height;
		widthOnCnvs = (ctx.canvas.height/heightOnImg)*widthOnImg;
		heightOnCnvs = ctx.canvas.height;
		
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(img, 0, 0, widthOnImg, heightOnImg, 0-offset, 0, widthOnCnvs, heightOnCnvs);
		ctx.drawImage(img, 0, 0, widthOnImg, heightOnImg, widthOnCnvs-offset, 0, widthOnCnvs, heightOnCnvs);
		offset = (offset > widthOnCnvs) ? 0 : offset+this.speed;
	}
}