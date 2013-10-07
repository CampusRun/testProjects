function Background(ctx, img)
{
	//Default settings
	this.frames = 500; //number of frames for scrolling canvas-width
	
	var speed = ctx.canvas.width/this.frames;	
	var offset = 0;
	
	//OnCnvsProperties
	var widthOnCnvs;
	var heightOnCnvs;
	var noImages;
	setOnCnvsProperties();
	
	Background.prototype.draw = function()
	{
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
		for (var i=0; i <= noImages; i++) 
		{
			ctx.drawImage(img, 0, 0, img.width, img.height,
						 (i*widthOnCnvs)-offset, 0, widthOnCnvs, heightOnCnvs);			
		};
		offset = (offset > widthOnCnvs) ? 0 : offset+speed;
	}
	
	Background.prototype.resize = function()
	{
		setOnCnvsProperties();
	}
	
	function setOnCnvsProperties()
	{
		widthOnCnvs = (ctx.canvas.height/img.height)*img.width;
		heightOnCnvs = ctx.canvas.height;
		noImages = Math.ceil(img.width/ctx.canvas.width);		
	}
}