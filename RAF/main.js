window.addEventListener('load', init);

var ctx, canvas, x = 0, y = 0, v_x = 5, v_y = 5;

window.requestAnimationFrame = (function () {
	return window.requestAnimationFrame || 
	window.webkitRequestAnimationFrame ||
	window.mozRequestAnimationFrame ||
	function (f) {
		window.setTimeout(f, 1000 / 60);
	}
})();

function init () {
	canvas = document.getElementById('marco');
	ctx = canvas.getContext('2d');
	draw();
}

function draw () {
	ctx.clearRect(0, 0, canvas.width, canvas.height)
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, 10);
	ctx.closePath();
	ctx.fill();
	x += v_x;
	y += v_y;

	// Rebote 
	if(x < 0 || x > canvas.width) v_x = -v_x;
	if(y < 0 || y > canvas.height) v_y = -v_y;
	requestAnimationFrame(draw);
}
