function Graphics(ctx, startX, startY, color) {
	this.ctx = ctx;
	// bgColor, height, width
	this.color = color;
	this.startX = startX;
	this.startY = startY;
}

Graphics.prototype.circle = function circle(x, y, color="black", radius=5) {
	const startTheta = 0;
	const endTheta = 2 * Math.PI;
	// console.log({x, y, startY: this.startY, val: this.startY - y})
	this.ctx.beginPath();
	this.ctx.fillStyle = color;
	// this.ctx.arc(x, this.startY - y, radius, startTheta, endTheta);
	this.ctx.arc(x, y, radius, startTheta, endTheta);
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

Graphics.prototype.rect = function rect(x, y, width, height, color="#000") {
	this.ctx.save();

	this.ctx.strokeStyle = color;
	this.ctx.beginPath();
	this.ctx.rect(x, y, width, height);
	this.ctx.stroke();

	this.ctx.restore();
}

export default Graphics;