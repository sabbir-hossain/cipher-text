function Graphics(ctx, height, start=0, end=0) {
	this.ctx = ctx;
	this.cH = height;
	this.cW = this.cH * 7 / 10;
	this.start = start;
	this.end = this.cH + end;
 	// this.cW = this.ctx.canvas.width;
	// this.cH = this.ctx.canvas.height;
	// console.log({cH: this.cH, cW: this.cW})
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

Graphics.prototype.triangle = function triangle(x1, y1, x2, y2, x3, y3, color="black") {
	// this.ctx.strokeStyle = color;
	this.ctx.fillStyle = color;

	this.ctx.beginPath();
	this.ctx.moveTo(this.start + x1, this.end - y1);
	this.ctx.lineTo(this.start + x2, this.end - y2);
	this.ctx.lineTo(this.start + x3, this.end - y3);
	this.ctx.closePath();
	// this.ctx.stroke();
	this.ctx.fill();
}