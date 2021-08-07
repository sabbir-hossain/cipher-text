function Graphics(ctx, color, bgColor, startX, startY,  height, width) {
	this.ctx = ctx;

	this.color = color;
	this.startX = startX;
	this.startY = startY;
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
	this.ctx.moveTo(fromX, this.startY - fromY);
	this.ctx.lineTo(x, this.startY - y);
	this.ctx.stroke();
}

Graphics.prototype.triangle = function triangle(x1, y1, x2, y2, x3, y3, color="black") {

	this.ctx.save();
	// this.ctx.strokeStyle = color;
	this.ctx.fillStyle = this.color;

	this.ctx.beginPath();
	this.ctx.moveTo(this.startX + x1, this.startY - y1);
	this.ctx.lineTo(this.startX + x2, this.startY - y2);
	this.ctx.lineTo(this.startX + x3, this.startY - y3);
	this.ctx.closePath();
	// this.ctx.stroke();
	this.ctx.fill();

	this.ctx.restore();
}

export default Graphics;