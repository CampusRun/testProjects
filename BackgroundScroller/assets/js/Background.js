function Background(ctx, img, speed)
{
	offset = 0;
	this.draw = function()
	{
		width = (ctx.canvas.height/img.height)*img.width;
		height = ctx.canvas.height;
		
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		ctx.drawImage(img, 0, 0, img.width, img.height, 0-offset, 0, width, height);
		ctx.drawImage(img, 0, 0, img.width, img.height, width-offset, 0, width, height);
		offset = (offset > width) ? 0 : ++offset;
	}
}