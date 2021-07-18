function Graphics(ctx, height) {
	this.ctx = ctx;
	this.cH = height;
	// this.cW = this.cH * 7 / 10;
 	// this.cW = this.ctx.canvas.width;
	this.cH = this.ctx.canvas.height;
}

Graphics.prototype.circle = function circle(x, y, radius=5, color="black") {
	const startTheta = 0;
	const endTheta = 2 * Math.PI;

	this.ctx.beginPath();
	this.ctx.fillStyle = color;
	this.ctx.arc(x, this.cH - y, radius, startTheta, endTheta);
	this.ctx.fill();
	this.ctx.stroke();
}

Graphics.prototype.line = function line(fromX, fromY, x, y, color="black", lineWidth = 1) {
	this.ctx.beginPath();
	this.ctx.strokeStyle = color;
	this.ctx.lineWidth = lineWidth;	
	this.ctx.moveTo(fromX, this.cH - fromY);
	this.ctx.lineTo(x, this.cH - y);
	this.ctx.stroke();
}

Graphics.prototype.triangle = function triangle(x1, y1, x2, y2, x3, y3) {
	this.ctx.strokeStyle = 'black';

	this.ctx.beginPath();
	this.ctx.moveTo(x1, this.cH -  y1);
	this.ctx.lineTo(x2, this.cH - y2);
	this.ctx.lineTo(x3, this.cH -  y3);
	this.ctx.closePath();
	this.ctx.stroke();
	// this.ctx.fill();
}